import React, { useState, useContext, useEffect } from "react";
import "../css/ListingDetails.css";
import TimeLeft from "./TimeLeft";
import { ListingContext } from "../contexts/ListingContextProvider";

const Bidding = (props) => {
  const listingContext = useContext(ListingContext);
  const [amount, setAmount] = useState("");
  const [listingBids, setListingBids] = useState([]);
  const [highestBid, setHighestBid] = useState(props.startingBid);
  const [numberOfBids, setNumberOfBids] = useState("");

  useEffect(() => {
    fetchData();
  }, [props]);

  async function fetchData() {
    setListingBids(await listingContext.getBidsFromListing(props.id));
  }

  useEffect(() => {
    if (listingBids[0]) {
      console.log(listingBids);
      setHighestBid(listingBids[0].amount);
      setNumberOfBids(listingBids.length);
    } else {
      setHighestBid(props.startingBid);
      setNumberOfBids("0");
    }
  }, [listingBids]);

  const createBid = async (event) => {
    let listingId = props.id;

    event.preventDefault();
    const credentials = {
      listingId: listingId,
      amount: amount,
    };

    let response = await fetch(`/rest/v1/listings/${props.id}/bids`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    try {
      response = await response.json();
    } catch {
      console.error("console log error");
    }
    fetchData();
  };

  return (
    <div className="payment-block">
      <div className="starting-price">
        <p className="payment-cursive-text">Current bid</p>
        <p className="payment-regular-text">{highestBid} kr</p>
      </div>
      <div className="end-time">
        <p className="payment-cursive-text"> Ends</p>
        <TimeLeft {...props} />
      </div>
      <div className="bids">
        <p className="payment-cursive-text">Bids</p>
        <p className="payment-regular-text">{numberOfBids}</p>
      </div>
      <div className="payment-component">
        <div className="payment-box">
          <label id="bidding-label">Place bid</label>
          <input
            type="text"
            id="bidding-input"
            placeholder="kr"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button onClick={createBid}>Submit</button>
      </div>
    </div>
  );
};

export default Bidding;
