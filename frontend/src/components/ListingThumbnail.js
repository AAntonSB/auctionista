import React, { useEffect, useState } from "react";
import { NavLink } from "reactstrap";
import "../css/thumbnail.css";

const ListingThumbnail = (props) => {
  const [displayImage, setDisplayImage] = useState();

  function remainigTime() {
    let distance = props.listing.endDate - new Date();
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    let time = null;
    if (Math.trunc(days) >= 1) {
      time = Math.round(days) + " days left";
    } else if (Math.trunc(days) < 1) {
      time = hours + "h " + minutes + "m " + seconds + "s ";
    }
    return time;
  }

  useEffect(() => {
    if (props.listing.images[0]) {
      console.log(props.listing.images[0].filename);
      setDisplayImage(
        "/rest/v1/download/" + props.listing.images[0].filename
      );
    } else {
      let x = Math.random(1, 100);
      setDisplayImage("https://picsum.photos/300/200?random=" + x);
    }
  }, [props.listing]);

  return (
    <>
      <NavLink
        href={"/listing-details/" + props.listing.id}
        className="card card-1"
        style={{ padding: "2px" }}
      >
        <div className="card-img">
          <img src={displayImage} className="cardImage"></img>
        </div>
        <p style={{ margin: "0px" }} className="thumbnail-name">
          <strong>{props.listing.title}</strong>
        </p>
        <span className="myInline myAlignLeft" style={{ paddingRight: "10px" }}>
          {props.listing.startingBid} kr
        </span>
        <span className="myInline myAlignLeft">3 bud</span>
        <span className="myInline myAlignRight">{remainigTime()} </span>
      </NavLink>
    </>
  );
};

export default ListingThumbnail;
