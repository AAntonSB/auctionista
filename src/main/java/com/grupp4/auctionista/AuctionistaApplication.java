package com.grupp4.auctionista;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
public class AuctionistaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuctionistaApplication.class, args);
	}

}
