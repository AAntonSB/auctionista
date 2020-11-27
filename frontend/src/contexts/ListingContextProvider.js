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

     console.log(listings);
     updateListings(listings);
     return listings; 
   };

   const setCurrentListing = (listing) => {
     setListing(listing); 
   }

   const fetchOneListing =  async (id) => {

    let listing = await fetch("http://localhost:3000/rest/v1/listings/" + id);
    listing = await listing.json();

  //  let listing = listingList.filter((l) => l.id ===id);
     
      // let listing = await fetch("http://localhost:3000/rest/v1/listings/" + id)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((error) => console.error(error));

     // listing = await listing.json();

      //setListing(listing);
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
