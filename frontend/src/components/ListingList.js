import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router";
import { ListingContext } from "../contexts/ListingContextProvider";
import ListingThumbnail from "./ListingThumbnail";
import "../css/ListingList.css";
import SearchBar from "./SearchBar";
import { useNotification } from "../providers/NotificationProvider";

const ListingList = (props) => {
  const [response, setResponse] = useState({});

  const updateResponse = (update) => {
    setResponse({ ...response, ...update });
  };

  const listingContext = useContext(ListingContext);
  const [ListingList, setListingList] = useState([]);

  useEffect(async () => {
    await listingContext.fetchAllListings();
    console.log(listingContext.listingList)
    //let newlists = await fetchAllListings();
    //setListingList(newlists)
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

  const fetchAllListings = async () => {
    let alllistings = await fetch("/rest/v1/listings");
    alllistings = await alllistings.json();
  };

  const searchAllListings = async (searchString) => {
    let searchresults = await listingContext.getListingsByString(searchString)
  }
  /*
  useEffect(() => {
    console.log("we hope we see this");
    console.log(response);

    // if (response.url.includes("error")) {
    //   console.log("Wrong username/password");
    // } else {
    //   console.log("Successfully logged in");
    //   //fetchUser();
    //   //props.history.push("/");
    // }
  }, [response]);
  */
  /*
  useEffect(() => {
    console.log(listingContext.listingList);
  }, [listingContext.listingList]);
  */

  return (
    <div>
      <SearchBar setSearchedList={setListingList} />
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
