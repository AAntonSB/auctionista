package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.Listing;
import org.springframework.beans.factory.annotation.Autowired;
import com.grupp4.auctionista.repositories.ListingRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ListingService {
    @Autowired
    ListingRepo listingRepo;


    public List<Listing> getAllListings() {
        return listingRepo.findAll();
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
    
}
