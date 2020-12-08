package com.grupp4.auctionista.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Table(name = "bid")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bid {
    @Id
    @GeneratedValue
    private UUID id;
    private long amount;
    private long timestamp;
    private UUID bidder;
    private String listing;
}
