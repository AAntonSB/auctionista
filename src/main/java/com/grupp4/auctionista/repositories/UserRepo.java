package com.grupp4.auctionista.repositories;

import com.grupp4.auctionista.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepo extends JpaRepository<User, UUID> {
    User findByUsername(String user);
    // If any issues try CrudRepository
}
