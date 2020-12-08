package com.grupp4.auctionista.services;


import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.repositories.BidRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidService {
    @Autowired
    BidRepo bidRepo;


    public List<Bid> getAllBids() {
        return bidRepo.findAll();
    }

    public Bid save(Bid bid) {
        return bidRepo.save(bid);
    }
}

