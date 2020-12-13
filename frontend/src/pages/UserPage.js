import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from "react-router";
import { AuthContext, user } from "../contexts/AuthContextProvider";
import "../css/userpage.css"
import UserPageItem from "../components/UserPageItem.js"

const UserPage = () => {

    const [userListings, setUserListings] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log("fetching userlist")
        //fetchUser()
        fetchUserData();
        console.log(user)
        console.log(userListings)

        async function fetchUserData() {
            setUserListings(await fetchUserListings());
          }

      },[user]);

      const fetchUserListings = async () => {
        let listings = await fetch("/rest/v1/listings/user");
        listings = await listings.json();
   
        return listings;
        //setUserListings(listings);
      };

        //src={"https://via.placeholder.com/150"}

        /*
        <div class="center-by-flex">
            <div class="user-listings-grid-container">
                <div class="time-ending">Ending: 01 Feb 00:00:00</div>
    
                <div class="current-bid">Highest Bid</div>
                <div class="number-of-bids">Bids: 0</div>
    
                <div class="highestbidder">Bidder</div>
                
                
                <div class="display-image">
                <img class="object-fit-contains" src={fetch("/rest/v1/download/" + userListings[0].images[0])} alt="" />
                </div>
                <div class="listing-text">
                <p class="center-my-text">Title</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            </div>

        
        */

    return (
        <div className="emergency-fix">  
            {userListings.length > 0 ? 
            userListings.filter((listing) => listing.endDate > Date.now())
                .map((listing, i) => (
                    <UserPageItem
                    key={String.valueOf(listing.id) + i}
                    listing={listing}
                    />
                ))
                        : null}
            
            
        </div>
    )
}

export default withRouter(UserPage);
