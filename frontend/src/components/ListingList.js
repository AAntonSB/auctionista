import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router";
import { ListingContext } from "../contexts/ListingContextProvider";
import ListingThumbnail from "./ListingThumbnail";
import "../css/ListingList.css";
import SearchBar from "./SearchBar";
import { useNotification } from "../providers/NotificationProvider";

const ListingList = (props) => {
  const listingContext = useContext(ListingContext);
  //const [ListingList, setListingList] = useState([]);

  useEffect(async () => {
    await listingContext.fetchAllListings();
  }, []);

  const fetchUser = async () => {
    console.log("fetching user");
    let res = await fetch("/auth/whoami");
    try {
      res = await res.json();
      //setUser(res)
      console.log(res);
    } catch {
      console.log("Not authenticated");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    console.log(listingContext.listingList);
  }, [listingContext.listingList]);

  return (
    <div>
      <SearchBar />
      <div className="my-grid-layout">
        {listingContext.listingList
          .filter((listing) => listing.endDate > Date.now())
          .map((listing, i) => (
            <ListingThumbnail
              key={String.valueOf(listing.id) + i}
              listing={listing}
            />
          ))}
      </div>
    </div>
  );
};

export default withRouter(ListingList);
