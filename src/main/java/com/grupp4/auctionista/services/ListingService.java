package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.ActiveListing;
import com.grupp4.auctionista.entities.ActiveListings;
import com.grupp4.auctionista.entities.Listing;
import com.grupp4.auctionista.repositories.BidRepo;
import com.grupp4.auctionista.repositories.ListingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Scheduled;
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
}

    @PostConstruct
    public void initFlups() {
        var listings = getAllListings();
        var activeListings = ActiveListings.getInstance();
        System.out.println("hej nu startar vi");
        activeListings.setActiveListings(listings.stream()
                .map((listing) -> new ActiveListing(listing.getId(), listing.getEndDate()))
                .sorted(Comparator.comparingLong(ActiveListing::getTimestamp)).toArray(ActiveListing[]::new));
    }

    @Scheduled(fixedRate = 1000)
    public void checkActiveAuctions() {
        var activeListings = ActiveListings.getInstance();

        long now = TimeStampService.getTimestamp();
        System.out.println("hej nu kör vi");

        var expiredListings = activeListings.expireListingsFrom(now);
        for (UUID expiredListingId : expiredListings) {
            var listing = getListingById(expiredListingId);
            // make the listings highest bidder the winner
        }
    }
}
