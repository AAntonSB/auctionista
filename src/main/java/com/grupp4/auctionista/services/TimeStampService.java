package com.grupp4.auctionista.services;

import com.grupp4.auctionista.entities.Bid;
import com.grupp4.auctionista.entities.Listing;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TimeStampService {

    public static Long getTimestamp(){
        return new Date().getTime();
    }

    public static boolean isTimestampValid(Bid bid, Listing listing){

        return true;
    }
}
