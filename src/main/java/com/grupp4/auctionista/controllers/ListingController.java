package com.grupp4.auctionista.controllers;

import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.Listing;

import com.grupp4.auctionista.services.BidService;
import com.grupp4.auctionista.services.ImageUploadService;
import com.grupp4.auctionista.services.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/rest/v1/listings")
public class ListingController {

    @Autowired
    ListingService listingService;

    @Autowired
    BidService bidService;

    @Autowired
    private ImageUploadService imageUploadService;

    @GetMapping
    public List<Listing> getAllListings(){
        return listingService.getAllListings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Listing> findListingById(@PathVariable UUID id) {
        return ResponseEntity.ok(listingService.getListingById(id));
    }

    @GetMapping("search/{searchString}")
    public ResponseEntity<List<Listing>> findListingsBySearchString(@PathVariable String searchString) {
        System.out.println("Listing Controller ");
        return ResponseEntity.ok(listingService.getListingsBySearchString(searchString));
    }

    @GetMapping("/bids")
    public List<Bid> getAllBids(){
        return bidService.getAllBids();
    }

    @PostMapping("/bids")
    public ResponseEntity<Bid> saveBid(@Validated @RequestBody Bid bid){
        return ResponseEntity.ok(bidService.save(bid));
    }

    @PostMapping
    public ResponseEntity<Listing> saveUser(@Validated @RequestBody Listing listing) {
        return ResponseEntity.ok(listingService.save(listing));
    }

    @PostMapping(value = "/tripple", consumes = MediaType.MULTIPART_FORM_DATA_VALUE )
    public void createNewObjectWithImageSecond(
            @RequestPart Listing listing,
            @RequestPart List<MultipartFile> images){
        /*
        WARNING: PK in DB needs to be INTEGER for this to work

        works with
        curl -X POST "http://localhost:4037/rest/v1/listings/double" -H  "accept: application/json;charset=UTF-8" -H  "Content-Type: multipart/form-data" -F "images=@./talgoxe.jpg;type=image/jpeg" -F "stringtest={\"first\":\"White\"};type=application/json;charset=utf-8"
        and
        curl -X POST "http://localhost:4037/rest/v1/listings/double" -F "images=@./talgoxe.jpg;type=image/jpeg" -F "stringtest={\"first\":\"White\"};type=application/json;charset=utf-8"
         */
        System.out.println(listing);
        var newlisting = listingService.save(listing);
        System.out.println(newlisting);
        System.out.println(images);
        var results = imageUploadService.handleFileUpload(images, newlisting.getId());
        System.out.println(results);
        System.out.println("After saving pics");
        System.out.println(newlisting);
        System.out.println("after setting images");
        newlisting.setImages(results);
        System.out.println(newlisting);
        //System.out.println(listingService.getById(newlisting.getId()));

    }
    /*
    @GetMapping("/{id}")
    public Optional<Listing> getOneListing(@PathVariable UUID id){
        return listingService.getById(id);
    }
     */



    @DeleteMapping("/{id}")
    public void deleteListing(@PathVariable UUID id){
        listingService.deleteListing(id);
    }

}
