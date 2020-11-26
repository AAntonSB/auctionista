package com.grupp4.auctionista.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;


@Entity
@Table(name = "listings")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Listing {

    @Id
    @GeneratedValue
    private UUID id;
    //private UUID sellerId;
    //private UUID purchaserId;
    private String title;
    private String description;
    private int reservedPrice;
    private int startingBid;
    private Long endDate;

}
