package com.grupp4.auctionista.services;


import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.Listing;
import com.grupp4.auctionista.repositories.BidRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BidService {
    @Autowired
    BidRepo bidRepo;


    public List<Bid> getAllBids() {
        return bidRepo.findAll();
    }

    public Bid save(Bid bid) {
        System.out.println(bid);

        Bid newbid = bidRepo.save(bid);

        return newbid;
    }

    public List<Bid> getBidsByListingId(UUID listingId) {
        List<Bid> listings = bidRepo.findByListingIdIsOrderByAmountDesc(listingId);
        return listings;
    }
}

