package com.grupp4.auctionista.repositories;

import com.grupp4.auctionista.entities.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListingRepo extends JpaRepository<Listing, Long> {
}
