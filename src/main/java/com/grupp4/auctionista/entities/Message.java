package com.grupp4.auctionista.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "messages")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String sender; // Potentially more advanced
    private String content;
    private Long timestamp; // Lättare att conventera runt (kanske inte nödvändigt för vår applikation)
}
