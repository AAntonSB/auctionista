import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router";
import { ListingContext } from "../contexts/ListingContextProvider";
import ListingThumbnail from "./ListingThumbnail";


const ListingList = (props) => {
  const listingContext = useContext(ListingContext);
  const [ListingList, setListingList] = useState([]);

  useEffect(async () => {
    await listingContext.fetchAllListings();
  }, []);

  const fetchUser = async () => {
    console.log("fetching user")
  let res = await fetch('/rest/v1/user/auth/whoami')
  try {
    res = await res.json()
    //setUser(res)
    console.log(res);
  } catch {
    console.log('Not authenticated');
  }
}

useEffect(() => {
    fetchUser()
}, [])

  useEffect(() => {
    console.log(listingContext.listingList);
  },[listingContext.listingList])

  return (
    <div>
      {listingContext.listingList.map((listing, i) => (
        <ListingThumbnail key={String.valueOf(listing.id) + i} listing={listing} />
      ))}
    </div>
  );
}

export default withRouter(ListingList); 