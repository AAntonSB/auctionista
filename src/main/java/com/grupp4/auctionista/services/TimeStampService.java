package com.grupp4.auctionista.services;

import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TimeStampService {
    public static Long getTimestamp(){
        return new Date().getTime();
    }
}
