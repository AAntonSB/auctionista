package com.grupp4.auctionista.controllers;

import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.Listing;
import com.grupp4.auctionista.services.BidService;
import com.grupp4.auctionista.services.ImageUploadService;
import com.grupp4.auctionista.services.ListingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/rest/v1/listings")
@Tag(description = "The listings controller, a crud repository for the listings and associated bids", name = "Listings")
public class ListingController {

    @Autowired
    ListingService listingService;

    @Autowired
    BidService bidService;

    @Autowired
    private ImageUploadService imageUploadService;

    @Operation(summary = "Returns all listings")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found listing(s)",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = Listing.class))
                    })
    })
    @GetMapping
    public ResponseEntity<List<Listing>> getAllListings() {
        return ResponseEntity.ok(listingService.getAllListings());
    }

    @Operation(summary = "Finds a listing by the id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found user(s)",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = Listing.class))
                    }),
            @ApiResponse(responseCode = "404", description = "Failed to find listing", content = @Content)})
    @GetMapping("/{id}")
    public ResponseEntity<Listing> findListingById(@PathVariable UUID id) {
        return ResponseEntity.ok(listingService.getListingById(id));
    }

    @Operation(summary = "Returns an array of listings containing the search string")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found listings",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = Listing.class))
                    })
    })
    @GetMapping("/search/{searchString}")
    public ResponseEntity<List<Listing>> findListingsBySearchString(@PathVariable String searchString) {
        return ResponseEntity.ok(listingService.getListingsBySearchString(searchString));
    }

    @Operation(summary = "Returns an array of bids, sorted desc by bid amount for the given listing id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found bids",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = Bid.class))
                    })
    })
    @GetMapping("/bids/{listingId}")
    public ResponseEntity<List<Bid>> findBidsWithListingId(@PathVariable UUID listingId) {
        return ResponseEntity.ok(bidService.getBidsByListingId(listingId));
    }

    @Operation(summary = "Saves a bid", description = "The incoming bid gets validated based on " +
            "the time of reception, the incoming amount compared to the current max and " +
            "that the bidder isn't the listing owner. It also sets the bids timestamp and bidder id.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Bid saved",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = Bid.class))
                    }),
            @ApiResponse(responseCode = "400", description = "The auction is over / The bid is lower then the current highest bid / You can't bid on your own listings", content = @Content),
            @ApiResponse(responseCode = "401", description = "Unauthorized", content = @Content),
})
    @PostMapping("/{id}/bids")
    public ResponseEntity<Bid> saveBid(@Validated @PathVariable UUID id, @RequestBody Bid bid) {
        return ResponseEntity.ok(listingService.createBid(id, bid));
    }

    @Operation(summary = "saves the listing")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Listing saved",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = Listing.class))
                    })
    })
    @PostMapping
    public ResponseEntity<Listing> saveListing(@Validated @RequestBody Listing listing) {
        return ResponseEntity.ok(listingService.save(listing));
    }

    @Operation(summary = "FIX THE POSTMAPPING ROUTE AND HTTP RETURNS")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Image saved",
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = Listing.class))
                    })
    })
    @PostMapping(value = "/tripple", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Listing> createNewObjectWithImageSecond(
            @RequestPart Listing listing,
            @RequestPart List<MultipartFile> images) {

        var newlisting = listingService.save(listing);
        var results = imageUploadService.handleFileUpload(images, newlisting.getId());
        newlisting.setImages(results);

        return ResponseEntity.ok(listingService.getListingById(newlisting.getId()));

    }
    @Operation(summary = "Removes a listing")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Listing removed")
    })
    @DeleteMapping("/{id}")
    public void deleteListing(@PathVariable UUID id) {
        listingService.deleteListing(id);
    }
}
