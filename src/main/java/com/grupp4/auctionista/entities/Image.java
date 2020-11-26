package com.grupp4.auctionista.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "images")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int imageId; //private int image_id;

    private String ownerId; // TODO, change String to UUID

    private String filename;

    public Image(String ownerId, String filename) {
        this.ownerId = ownerId;
        this.filename = filename;
    }
}
