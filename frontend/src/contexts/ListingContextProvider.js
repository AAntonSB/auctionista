import React, { createContext, useState } from "react";
export const ListingContext = createContext();

const ListingContextProvider = (props) => {
  const [listingList, setListings] = useState([]);
  const [listing, setListing] = useState([]);

  const appendListing = (listing) => {
    setListings([...listingList, listing]);
  };

  const fetchAllListings = async () => {
    let listings = await fetch("/rest/v1/listings");
    listings = await listings.json();

    setListings(listings);
  };

  const setCurrentListing = (listing) => {
    setListing(listing);
  };

  const fetchOneListing = async (id) => {
    let listing = await fetch("/rest/v1/listings/" + id);
    listing = await listing.json();

    return listing;
  };

  const getListingsByString = async (searchString) => {
    let listings = await fetch("/rest/v1/listings/search/" + searchString);
    listings = await listings.json();

    console.log(listings);
    setListings(listings);
    return listings;
  };

  const getBidsFromListing = async (listingId) => {
    let bids = await fetch("/rest/v1/listings/bids/" + listingId);
    bids = await bids.json();

    return bids;
  };

  const values = {
    listingList,
    listing,
    appendListing,
    setCurrentListing,
    fetchAllListings,
    fetchOneListing,
    getListingsByString,
    getBidsFromListing,
  };

  return (
    <ListingContext.Provider value={values}>
      {props.children}
    </ListingContext.Provider>
  );
};

export default ListingContextProvider;
