package com.grupp4.auctionista.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActiveListing {
    private UUID id;
    private long timestamp;
}
