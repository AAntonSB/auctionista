import React, { createContext, useState } from "react";
export const ListingContext = createContext();

const ListingContextProvider = (props) => { 

  const [listingList, setListings] = useState([]);
  const [listing, setListing] = useState([]);

  const appendListing = (listing) => {

    setListings([...listingList, listing])
  };

  const updateListings = (updates) => {
    setListings(listingList.concat(updates));
  };

   const fetchAllListings = async () => {
     let listings = await fetch("/rest/v1/listings");
     listings = await listings.json();

     console.log(listings);
     updateListings(listings);
   };

   const setCurrentListing = (listing) => {
     setListing(listing); 
   }

   const fetchOneListing =  async (id) => {

    let listing = await fetch("/rest/v1/listings/" + id);
    listing = await listing.json();

      console.log(listing)
      return listing; 
   };


  const values = {
    listingList,
    listing,
    appendListing,
    setCurrentListing,
    fetchAllListings,
    fetchOneListing,
  };

  return(
    <ListingContext.Provider value={values}>
      {props.children}
    </ListingContext.Provider>
  );

};

export default ListingContextProvider;
