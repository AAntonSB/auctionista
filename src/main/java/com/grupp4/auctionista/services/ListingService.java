package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.ActiveListing;
import com.grupp4.auctionista.entities.ActiveListings;
import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.Listing;
import com.grupp4.auctionista.repositories.BidRepo;
import com.grupp4.auctionista.repositories.ListingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.annotation.PostConstruct;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class ListingService {
    private final ConcurrentMap<UUID, Object> locks = new ConcurrentHashMap<UUID, Object>();
    @Autowired
    ListingRepo listingRepo;
    @Autowired
    BidRepo bidRepo;
    @Autowired
    BidService bidService;
    @Autowired
    UserService userService;

    public List<Listing> getAllListings() {
        return listingRepo.findAll();
    }

    public Listing getListingById(UUID id) {
        return listingRepo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find the listing"));
    }

    public Listing save(Listing listing) {
        var newListing = listingRepo.save(listing);
        var activeListing = ActiveListings.getInstance();
        activeListing.addToActiveListingToListing(new ActiveListing(newListing.getId(), newListing.getEndDate()));
        return newListing;
    }

    public void deleteListing(UUID id) {
        listingRepo.deleteById(id);
    }

    public Optional<Listing> getById(UUID id) {
        return listingRepo.findById(id);
    }

    public List<Listing> getListingsBySearchString(String searchString) {
        return listingRepo.findByTitleContainingIgnoreCase(searchString);
    }

    private Object getLock(UUID id) {
        locks.putIfAbsent(id, new Object());
        return locks.get(id);
    }

    public Bid createBid(UUID listingId, Bid bid) {
        synchronized (getLock(listingId)) {
            var listing = getListingById(listingId);
            var now = TimeStampService.getTimestamp();
            if (now >= listing.getEndDate())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The auction is over");
            if (bidService.getBidsByListingId(listingId).get(0).getAmount() >= bid.getAmount())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The bid is lower then the current highest bid");
            if(userService.findCurrentUser().getId().equals(listing.getSellerId()))
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "You can't bid on your own listings");

            bid.setTimestamp(now);
            bidRepo.save(bid);
            return bid;
        }
    }

    @PostConstruct
    public void initActiveListings() {
        var listings = getAllListings();
        var activeListings = ActiveListings.getInstance();
        System.out.println("hej nu startar vi");
        // Mappar om listings till activeListing
        activeListings.setActiveListings(listings.stream()
                .map((listing) -> new ActiveListing(listing.getId(), listing.getEndDate()))
                .sorted(Comparator.comparingLong(ActiveListing::getTimestamp)).toArray(ActiveListing[]::new));
    }

    @EventListener(ApplicationReadyEvent.class)
    public void checkActiveAuctions() throws InterruptedException {
        while(true) {
            var activeListings = ActiveListings.getInstance();
            long now = TimeStampService.getTimestamp();

            var expiredListings = activeListings.expireListingsFrom(now);
            if(expiredListings.isEmpty()) continue;
            for (UUID expiredListingId : expiredListings) {
                var listing = getListingById(expiredListingId);
                var bids = bidService.getBidsByListingId(expiredListingId);
                var finalBid =  bids.stream().reduce((prev, acc) -> prev.getAmount() > acc.getAmount() ? prev : acc);
                System.out.println("removing listing: " + listing.getTitle() + " At: " + now);
                if(finalBid.isEmpty()) {
                    listing.setPurchaserId(listing.getSellerId());
                    listingRepo.save(listing);
                    if(listing.getDescription().equals("Pretty duck")) return;
                    continue;
                }
                listing.setPurchaserId(finalBid.get().getBidId());
                listingRepo.save(listing);
            }
        }
    }
}
