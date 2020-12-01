package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.Listing;
import org.springframework.beans.factory.annotation.Autowired;
import com.grupp4.auctionista.repositories.ListingRepo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
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
    
}
