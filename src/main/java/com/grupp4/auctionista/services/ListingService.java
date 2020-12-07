package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.ActiveListing;
import com.grupp4.auctionista.entities.ActiveListings;
import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.Listing;
import com.grupp4.auctionista.repositories.BidRepo;
import com.grupp4.auctionista.repositories.ListingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.annotation.PostConstruct;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

@Service
public class ListingService {
    private final ConcurrentMap<UUID, Object> locks = new ConcurrentHashMap<UUID, Object>();
    @Autowired
    ListingRepo listingRepo;
    @Autowired
    BidRepo bidRepo;

    public List<Listing> getAllListings() {
        return listingRepo.findAll();
    }

    public Listing getListingById(UUID id) {
        return listingRepo.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find the listing"));
    }

    public Listing save(Listing listing) {
        return listingRepo.save(listing);
    }

    public void deleteListing(UUID id) {
        listingRepo.deleteById(id);
    }

    public Optional<Listing> getById(UUID id) {
        return listingRepo.findById(id);
    }

    public List<Listing> getListingsBySearchString(String searchString) {

        List<Listing> listings = listingRepo.findByTitleContainingIgnoreCase(searchString);

        System.out.println(listings);
        return listings;
    }

    private Object getLock(UUID id) {
        locks.putIfAbsent(id, new Object());
        return locks.get(id);
    }

    public void createBid(UUID id, Bid bid) {
        synchronized (getLock(id)) {
            var listing = getListingById(id);
            var now = TimeStampService.getTimestamp();
            if (now >= listing.getEndDate())
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The auction is over");
//            if (bid.getAmount() <= listing.getHighestBid().getAmount())
//                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The bid is lower then the current highest bid");

            bid.setTimestamp(now);
            bidRepo.save(bid);
//            listing.setHighestBid(bid);
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

//    @PostConstruct
//    public void checkActiveAuctions() throws InterruptedException {
//        while(true) {
//            var activeListings = ActiveListings.getInstance();
//            long now = TimeStampService.getTimestamp();
//            System.out.println("hej nu kör vi");
//
//            var expiredListings = activeListings.expireListingsFrom(now);
//            for (UUID expiredListingId : expiredListings) {
//                var listing = getListingById(expiredListingId);
//                // make the listings highest bidder the winner
//            }
//        }
//    }
}
