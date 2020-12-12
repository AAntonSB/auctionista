package com.grupp4.auctionista.repositories;

import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BidRepo extends JpaRepository<Bid, UUID> {
    List<Bid> findByListingIdIsOrderByAmountDesc(UUID listingId);
}

