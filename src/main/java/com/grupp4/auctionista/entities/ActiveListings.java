package com.grupp4.auctionista.entities;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
public class ActiveListings {

    private static ActiveListings single_instance = null;

    public static ActiveListings getInstance(){
        if(single_instance == null){
            single_instance = new ActiveListings();
        }
        return single_instance;
    }

    private ActiveListing[] activeListings;

    public List<UUID> expireListingsFrom(long now) {
        ArrayList<UUID> result = new ArrayList<>();

        for (int i = 0; i < activeListings.length; i++) {
            if (activeListings[i].getTimestamp() < now) {
                result.add(activeListings[i].getId());
            } else {
                System.arraycopy(activeListings, i, activeListings, 0, activeListings.length - i - 1);
                break;
            }
        }
        return result;
    }
}
