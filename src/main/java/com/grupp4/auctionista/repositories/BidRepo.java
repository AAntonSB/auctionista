package com.grupp4.auctionista.repositories;

import com.grupp4.auctionista.entities.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BidRepo extends JpaRepository<Bid, UUID> {
}
