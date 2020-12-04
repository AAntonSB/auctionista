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
     let listings = await fetch("http://localhost:3000/rest/v1/listings");
     listings = await listings.json();

     updateListings(listings);
   };

   const setCurrentListing = (listing) => {
     setListing(listing); 
   }

   const fetchOneListing =  async (id) => {

    let listing = await fetch("http://localhost:3000/rest/v1/listings/" + id);
    listing = await listing.json();

      return listing; 
   };

   const getListingsByString = async (searchString) => {
     let listings = await fetch(
       "http://localhost:3000/rest/v1/listings/search/" + searchString
     );
     listings = await listings.json();

     console.log(listings);
     setListings(listings);
     return listings; 

   }


  const values = {
    listingList,
    listing,
    appendListing,
    setCurrentListing,
    fetchAllListings,
    fetchOneListing,
    getListingsByString
  };

  return(
    <ListingContext.Provider value={values}>
      {props.children}
    </ListingContext.Provider>
  );

};

export default ListingContextProvider;
