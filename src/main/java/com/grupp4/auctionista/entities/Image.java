package com.grupp4.auctionista.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "images")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private int imageId; //private int image_id;

    /*
    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "employee_id")
     */
    @JsonIgnore
    private UUID owner_id; // TODO, change String to UUID

    private String filename;
    /*
    @ManyToOne(cascade = CascadeType.PERSIST)
    //@JoinColumn(name="ownerId") //, nullable=false
    private Listing owner;

     */

    public Image(UUID owner_id, String filename) {
        this.owner_id = owner_id;
        this.filename = filename;
    }

    @Override
    public String toString() {
        return "Image{" +
                "imageId=" + imageId +
                ", owner_id='" + owner_id + '\'' +
                ", filename='" + filename + '\'' +
                '}';
    }
}
