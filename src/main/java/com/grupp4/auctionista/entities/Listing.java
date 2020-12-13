package com.grupp4.auctionista.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
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
    //private UUID sellerId;
    //private UUID purchaserId;
    private String title;
    private String description;
    private int reservedPrice;
    private int startingBid;
    private Long endDate;
    private UUID seller;

    @OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE}) //FetchType.Eager?
    @JoinColumn(name = "owner_id")
    //@OneToMany(fetch = FetchType.EAGER, mappedBy = "owner", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    //@JoinColumn(name = "owner_id")
    private List<Image> images;

    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE}) //FetchType.Eager?
    @JoinColumn(name = "listingId")
    @OrderBy("amount DESC")
    private List<Bid> bids;

    @ElementCollection(fetch = FetchType.LAZY) //TODO not best practice to use eager
    @CollectionTable(
            name="bids",
            joinColumns=@JoinColumn(name="listingId")
    )
    @Column(name="amount")
    private List<Integer> simplebids;

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

    public List<Bid> getBids() {
        return bids;
    }

    public void setBids(List<Bid> bids) {
        this.bids = bids;
    }

    public UUID getSeller() {
        return seller;
    }

    public void setSeller(UUID seller) {
        this.seller = seller;
    }
}
