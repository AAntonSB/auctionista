import React, { useEffect, useContext } from "react";
import { Row, Col, Card, CardText } from "reactstrap";
import "../css/ListingDetails.css";

const Bidding = (props) => {


  useEffect(() => {
    console.log("props ", props);
  }, []);

  return (
    <div className="payment-block">
      <div className="starting-price">
        <p className="payment-cursive-text">Highest bid</p>
        <p className="payment-regular-text">
          {props.startingBid} kr
        </p>
      </div>
      <div className="end-time">
        <p className="payment-cursive-text">
          {" "}
          Ends
        </p>
        <p className="payment-regular-text">Time to end</p>
      </div>
      <div className="bids">
        <p className="payment-cursive-text">Bids</p>
        <p className="payment-regular-text">bids {"0"}</p>
      </div>
      <div className="payment-component">Place payment component here</div>
    </div>
  );
}

export default Bidding; 