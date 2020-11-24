import React, { createContext, useState } from "react";
export const ListingContext = createContext();

const ListingContextProvider = (props) => {

  const [listings, setListings] = useState([]);

  const appendListing = (listing) => {

    setListings([...listings, listing])
  }

  const uploadListing = async (e, listing) => {
    e.preventDefault();

    // const credentials = {
    //   email: email,
    //   full_name: fullName,
    //   password: password,
    //   phone_number: parseInt(phoneNumber),
    // };

    // console.log(credentials);
    let response = await fetch("/rest/v1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listing),
    });

    try {
      response = await response.json();
      appendListing(response);
    } catch {
      console.log("Bad credentials");
    }
  };


  const values = [
    listings,
    appendListing,
    uploadListing
  ]

  return(
    <ListingContext.Provider value={values}>
      {props.children}
    </ListingContext.Provider>
  )

}
export default ListingContextProvider;