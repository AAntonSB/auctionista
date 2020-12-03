import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { ListingContext } from "../contexts/ListingContextProvider";
import "../css/Listings.css";

const ListingDetails = (props) => {
  const listingContext = useContext(ListingContext);
  const [listing, setListing] = useState([]);
  const [displayImage, setDisplayImage] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    fetchData();
    if (listing.images) {
      console.log(listing);
      setDisplayImage(
        "http://localhost:4037/download/" + listing.images[0].filename
      );
    }
  }, []);

  async function fetchData() {
    setListing(await listingContext.fetchOneListing(id));
  }

  useEffect(() => {
    if (listing.images) {
      setDisplayImage(
        "http://localhost:4037/download/" + listing.images[0].filename
      );
    }
  }, [listing]);

  return (
    <div className="listings-div">
      <Card id="listing-details">
        <CardImg top width="100%" src={displayImage} alt="Card image cap" />
        <CardBody id="details-text">
          <CardTitle tag="h5">{listing.title}</CardTitle>
          <CardText>
            <small className="text-muted">{listing.description}</small>
          </CardText>
        </CardBody>
      </Card>
      <image src={"../logo.svg"}></image>
    </div>
  );
};

export default withRouter(ListingDetails);
