package com.grupp4.auctionista.controllers;

import com.grupp4.auctionista.entities.Listing;
import com.grupp4.auctionista.services.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/v1/listings")
public class ListingController {

    @Autowired
    ListingService listingService;

    @GetMapping
    public List<Listing> getAllListings(){
        return listingService.getAllListings();
    }

    @PostMapping
    public ResponseEntity<Listing> saveUser(@Validated @RequestBody Listing listing) {
        return ResponseEntity.ok(listingService.save(listing));
    }
}
