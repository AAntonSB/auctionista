package com.grupp4.auctionista.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "listings")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Listing {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @GeneratedValue

    private UUID id ;
    private UUID sellerId;
    private UUID purchaserId;
    private String title;
    private String description;
    private int reservedPrice;
    private int startingBid;
    private Long endDate;

    @OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE}) //FetchType.Eager?
    @JoinColumn(name = "owner_id")
    //@OneToMany(fetch = FetchType.EAGER, mappedBy = "owner", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    //@JoinColumn(name = "owner_id")
    private List<Image> images;

    @Override
    public String toString() {
        return "Listing{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", reservedPrice=" + reservedPrice +
                ", startingBid=" + startingBid +
                ", endDate=" + endDate +
                ", images=" + images +
                '}';
    }

    public Listing(String title, String description, int reservedPrice, int startingBid, Long endDate) {
        this.title = title;
        this.description = description;
        this.reservedPrice = reservedPrice;
        this.startingBid = startingBid;
        this.endDate = endDate;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getReservedPrice() {
        return reservedPrice;
    }

    public void setReservedPrice(int reservedPrice) {
        this.reservedPrice = reservedPrice;
    }

    public int getStartingBid() {
        return startingBid;
    }

    public void setStartingBid(int startingBid) {
        this.startingBid = startingBid;
    }

    public Long getEndDate() {
        return endDate;
    }

    public void setEndDate(Long endDate) {
        this.endDate = endDate;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

}
