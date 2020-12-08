import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router";
import {} from "reactstrap";
import { ListingContext } from "../contexts/ListingContextProvider";
import "../css/ListingDetails.css";
import Bidding from "./Bidding";

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
        "/rest/v1/download/" + listing.images[0].filename
      );
    }
  }, []);

  async function fetchData() {
    setListing(await listingContext.fetchOneListing(id));
  }

  useEffect(() => {
    if (listing.images) {
      setDisplayImage(
        "/rest/v1/download/" + listing.images[0].filename
      );
    }
  }, [listing]);

  // const DisplayEndTime = () => {
  //   let uni = new Date(listing.endDate * 1000);
  //   let months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   let month = months[uni.getMonth()];
  //   let date = uni.getDate();
  //   let hour = uni.getHours();
  //   let min = uni.getMinutes();
  //   return (
  //     <>
  //       {date} {month}{" "}
  //       {(hour.toString().length <= 2 ? "0" + hour :  hour) + ":" + min}
  //     </>
  //   );
  // };

  return (
    <div className="item-details-body">
      <div className="details-block">
        <h1 className="title-font">{listing.title}</h1>
        <div className="image-showcase">
          <main class="section coral" contenteditable>
            <img className="display-img" src={displayImage}></img>
          </main>
          <footer className="nav-text">
            <div class="circle">
              <div class="arrow"></div>
            </div>
            <div class="circle rotate-right right-align">
              <div class="arrow"></div>
            </div>
          </footer>
        </div>
        <div className="item-detail-description">
          <p>{listing.description}</p>
        </div>
      </div>
      <Bidding {...listing}/>
      {/* <div className="payment-block">
        <div className="starting-price">
          <p className="payment-cursive-text center-text">Starting price</p>
          <p className="payment-regular-text center-text">
            {listing.startingBid} kr
          </p>
        </div>
        <div className="end-time">
          <p className="payment-cursive-text center-text">
            {" "}
            Ends <DisplayEndTime />
          </p>
          <p className="payment-regular-text">Time to end</p>
        </div>
        <div className="bids">
          <p className="payment-cursive-text center-text">Bids</p>
          <p className="payment-regular-text">bids {"0"}</p>
        </div>
        <div className="payment-component">Place payment component here</div>
      </div> */}
    </div>
  );
};

export default withRouter(ListingDetails);
