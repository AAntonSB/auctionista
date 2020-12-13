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
    private UUID bidder;

    @Override
    public String toString() {
        return "Bid{" +
                "bidId=" + bidId +
                ", listingId=" + listingId +
                ", amount=" + amount +
                ", timestamp=" + timestamp +
                ", bidder=" + bidder +
                '}';
    }

    public UUID getListingId() {
        return listingId;
    }

    public void setListingId(UUID listingId) {
        this.listingId = listingId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    public UUID getBidder() {
        return bidder;
    }

    public void setBidder(UUID bidder) {
        this.bidder = bidder;
    }

    public UUID getBidId() {
        return bidId;
    }

    public void setBidId(UUID bidId) {
        this.bidId = bidId;
    }
}
