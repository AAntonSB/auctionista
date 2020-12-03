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