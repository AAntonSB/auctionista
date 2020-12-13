import React, {useState, useEffect, useContext} from 'react'
import { withRouter } from "react-router";
import { AuthContext, user } from "../contexts/AuthContextProvider";
import "../css/userpage.css"
import UserPageItem from "../components/UserPageItem.js"

const UserPage = () => {

    const [userListings, setUserListings] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchUserData();

        async function fetchUserData() {
            setUserListings(await fetchUserListings());
          }

      },[user]);

      const fetchUserListings = async () => {
        let listings = await fetch("/rest/v1/listings/user");
        listings = await listings.json();
   
        return listings;
      };

    return (
        <div>  
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
