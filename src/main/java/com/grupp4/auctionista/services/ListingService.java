package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.Listing;
import org.springframework.beans.factory.annotation.Autowired;
import com.grupp4.auctionista.repositories.ListingRepo;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
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

    public Listing getListingById(UUID id){
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
