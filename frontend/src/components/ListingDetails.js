import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import {ListingContext} from "../contexts/ListingContextProvider";
import "../stylings/Listings.css"

const ListingDetails = (props) => {
 const listingContext = useContext(ListingContext);
 const [listing, setListing] = useState([]);
 const id = props.match.params.id;

  useEffect( () =>{
   // console.log(listingContext.listingList.filter((l) => l.id === props.match.params.id));
   // await listingContext.fetchOneListing();
   fetchData()
  },[]);

     async function fetchData() {
       setListing(
         await listingContext
           .fetchOneListing(id)
       );
     }



  // useEffect(async () => {
  //   setListing(await listingContext.fetchOneListing(id));
  //   console.log(await listingContext.fetchOneListing(id));
  // },[listingContext.listingList])

//  const test = async () => {
//    setListing(await listingContext.fetchOneListing(props.match.params.id));
   
//  };

useEffect(()=> {
  console.log(listing)
},[listing])


  return (
    <div className="listings-div">
      <Card id="listing-details">
        <CardImg
          top
          width="100%"
          src={require("../logo.svg")}
          alt="Card image cap"
        />
        <CardBody id="details-text">
          <CardTitle tag="h5">{listing.title}</CardTitle>
          <CardText>
            <small className="text-muted">{listing.description}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(ListingDetails);