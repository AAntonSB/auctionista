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

    public static ActiveListings getSingle_instance() {
        return single_instance;
    }

    public static void setSingle_instance(ActiveListings single_instance) {
        ActiveListings.single_instance = single_instance;
    }

    public ActiveListing[] getActiveListings() {
        return activeListings;
    }

    public void setActiveListings(ActiveListing[] activeListings) {
        this.activeListings = activeListings;
    }

    public List<UUID> expireListingsFrom(long now) {
        ArrayList<UUID> result = new ArrayList<>();

        for (int i = 0; i < activeListings.length; i++) {
            if (activeListings[i].getTimestamp() <= now) {
                result.add(activeListings[i].getId());
            } else {
                System.arraycopy(activeListings, i, activeListings, 0, activeListings.length - i - 1);
                break;
            }
        }
        return result;
    }

    public void addListingToActiveListing(ActiveListing activeListing){
        activeListings = addTo(activeListings, activeListing);
    }

    private ActiveListing[] addTo(ActiveListing[] arr, ActiveListing... elements){
        ActiveListing[] tempArr = new ActiveListing[arr.length+elements.length];
        System.arraycopy(arr, 0, tempArr, 0, arr.length);
        System.arraycopy(elements, 0, tempArr, arr.length, elements.length);
        return tempArr;

    }
}
