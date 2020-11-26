import React, { createContext, useState } from "react";
export const ListingContext = createContext();

const ListingContextProvider = (props) => {

  const [listingList, setListings] = useState([]);

  const appendListing = (listing) => {

    setListings([...listingList, listing])
  }

  const updateListings = (updates) => {
    setListings(listingList.concat(updates));
  };

   const fetchAllListings = async () => {
     let listings = await fetch("rest/v1/listings");
     listings = await listings.json();

     updateListings(listings);
   };

  // const uploadListing = async (e, listing) => {
  //   e.preventDefault();

  //   // const credentials = {
  //   //   email: email,
  //   //   full_name: fullName,
  //   //   password: password,
  //   //   phone_number: parseInt(phoneNumber),
  //   // };

  //   // console.log(credentials);
  //   let response = await fetch("/rest/v1", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(listing),
  //   });

  //   try {
  //     response = await response.json();
  //     appendListing(response);
  //   } catch {
  //     console.log("Bad credentials");
  //   }
  // };


  const values = [
    listingList,
    appendListing
  ]

  return(
    <ListingContext.Provider value={values}>
      {props.children}
    </ListingContext.Provider>
  )

}
export default ListingContextProvider;