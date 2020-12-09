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

    

    const springReturns = async () => {
      const credentials =
    "username=" +
    encodeURIComponent("user") +
    "&password=" +
    encodeURIComponent("user");

      return await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: credentials
      }) 

      //springLogin();

    } 

    //console.log(springReturns)

    async function springLogin() {
      console.log("we should see this")

      //let response = await springReturns()
      //console.log(response)

      
      const credentials =
        "username=" +
        encodeURIComponent("user") +
        "&password=" +
        encodeURIComponent("user");
      
  
      let response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: credentials
      });
      
  

      console.log("we hope we see this")
      console.log(response)
  
      if (response.url.includes("error")) {
        console.log("Wrong username/password");
      } else {
        console.log("Successfully logged in");
        //fetchUser();
        //props.history.push("/");
      }
    }

    //springLogin();
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
