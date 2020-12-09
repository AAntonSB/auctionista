import React, { useState, useContext, useEffect } from "react";
import "../css/ListingDetails.css";
import TimeLeft from "./TimeLeft";
import { ListingContext } from "../contexts/ListingContextProvider";

const Bidding = (props) => {
  const listingContext = useContext(ListingContext);
  const [amount, setAmount] = useState("");
  const [listingBids, setListingBids] = useState([]);
  const [highestBid, setHighestBid] = useState(props.startingBid)
  
  useEffect(()=>{
    console.log(props)
    fetchData();
  },[props]);

    async function fetchData() {
      console.log(await listingContext.getBidsFromListing(props.id));
        setListingBids(await listingContext.getBidsFromListing(props.id));
    }

    useEffect(()=>{
      console.log(listingBids)
            if (listingBids[0]) {
              setHighestBid(listingBids[0].amount);
            } else {
              setHighestBid(props.startingBid);
            }
    },[listingBids]);


  const createBid = async event => {

    let timestamp = Date.now(); 
    let listingId = props.id;

   event.preventDefault();
     const credentials = {
       listingId: listingId,
       amount: amount,
       timestamp: timestamp
     };

     console.log(credentials);
        let response = await fetch(
          "/rest/v1/listings/bids",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );

        console.log(response);
        try {
          response = await response.json();
        } catch {
          console.log("Bad credentials ");
        }
        fetchData();
    }

  return (
    <div className="payment-block">
      <div className="starting-price">
        <p className="payment-cursive-text">Highest bid</p>
        <p className="payment-regular-text">{highestBid} kr</p>
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
          <label id="bidding-label">Place bid</label>
          <input
            type="text"
            id="bidding-input"
            placeholder="kr"
            autoComplete="off"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <button onClick={createBid}>Submit</button>
      </div>
    </div>
  );
}

export default Bidding; 