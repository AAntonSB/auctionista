package com.grupp4.auctionista.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "bids")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bid {

    @Id
    @GeneratedValue
    @JsonIgnore
    private UUID bidId;
    
    private UUID listingId;
    private double amount;
    private Long timestamp;

    @Override
    public String toString() {
        return "Bid{" +
                "bidId=" + bidId +
                ", listingId=" + listingId +
                ", amount=" + amount +
                ", timestamp=" + timestamp +
                '}';
    }
}
