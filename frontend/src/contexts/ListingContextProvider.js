import React, { createContext, useState } from "react";
export const ListingContext = createContext();

const ListingContextProvider = (props) => { 

  const [listingList, setListings] = useState([]);
  const [listing, setListing] = useState([]);
  const [bids, setBids] = useState([]);

  const appendListing = (listing) => {

    setListings([...listingList, listing])
  };

  const updateListings = (updates) => {
    setListings(listingList.concat(updates));
  };

   const fetchAllListings = async () => {
     let listings = await fetch("/rest/v1/listings");
     listings = await listings.json();

     updateListings(listings);
   };

   const setCurrentListing = (listing) => {
     setListing(listing); 
   }

   const fetchOneListing =  async (id) => {

    let listing = await fetch("/rest/v1/listings/" + id);
    listing = await listing.json();

      return listing; 
   };

   const getListingsByString = async (searchString) => {
     let listings = await fetch(
       "/rest/v1/listings/search/" + searchString
     );
     listings = await listings.json();

     console.log(listings);
     setListings(listings);
     return listings; 

   }

   const getBidsFromListing = async (listingId) => {
         let bids = await fetch("/rest/v1/listings/bids/" + listingId);
         bids = await bids.json();

         console.log(bids);
         setBids(bids);
         return bids; 

   }


  const values = {
    listingList,
    listing,
    bids,
    appendListing,
    setCurrentListing,
    fetchAllListings,
    fetchOneListing,
    getListingsByString,
    getBidsFromListing
  };

  return(
    <ListingContext.Provider value={values}>
      {props.children}
    </ListingContext.Provider>
  );

};

export default ListingContextProvider;
