package com.grupp4.auctionista.repositories;

import com.grupp4.auctionista.entities.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ListingRepo extends JpaRepository<Listing, UUID> {
    List<Listing> findByTitleContainingIgnoreCase(String searchString);

    List<Listing> findBySeller(UUID id);
}
