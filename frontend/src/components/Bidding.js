import React, { useEffect, useContext } from "react";
import { Row, Col, Card, CardText } from "reactstrap";
import "../css/ListingDetails.css";
import TimeLeft from "./TimeLeft";

const Bidding = (props) => {

  return (
    <div className="payment-block">
      <div className="starting-price">
        <p className="payment-cursive-text">Highest bid</p>
        <p className="payment-regular-text">{props.startingBid} kr</p>
      </div>
      <div className="end-time">
        <p className="payment-cursive-text"> Ends</p>
        <TimeLeft {...props} />
      </div>
      <div className="bids">
        <p className="payment-cursive-text">Bids</p>
        <p className="payment-regular-text">bids {"0"}</p>
      </div>
      <div className="payment-component">
        <div className="payment-box">
          <label for="bidding-input" id="bidding-label">
            Place bid
          </label>
          <input type="text" id="bidding-input" placeholder="kr"></input>
        </div>
      </div>
    </div>
  );
}

export default Bidding; 