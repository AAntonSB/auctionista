import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router";
import { ListingContext } from "../contexts/ListingContextProvider";
import ListingThumbnail from "./ListingThumbnail";
import "../css/ListingList.css";
import SearchBar from "./SearchBar";

const ListingList = (props) => {
  const listingContext = useContext(ListingContext);
  //const [ListingList, setListingList] = useState([]);

  useEffect(async () => {
    await listingContext.fetchAllListings();
  }, []);

  // useEffect(() => {
  //   console.log(listingContext.listingList);
  // },[listingContext.listingList])

  return (
    <div>
      <SearchBar/>
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
