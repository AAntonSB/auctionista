import React, { useEffect } from "react";
import {} from "reactstrap";
import "../css/thumbnail.css";

const ListingThumbnail = (props) => {

  const remainigTime = () =>{
    let miliseconds = props.listing.endDate - new Date();
    let seconds = miliseconds / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days =  hours/ 24; 
    
     let time = null;
    if(Math.trunc(days)>=1){
      time =  Math.round(days)  + " days left";
    }else if (Math.trunc(days) < 1) {
      time = Math.round(hours) + " hours left";
    }
    return time; 
  }



  return (
    <>
      <div className="card card-1" style={{ padding: "2px" }}>
        <img
          src="https://img.tradera.net/images/865/381093865_97d590d0-90e0-4ef9-a7a7-40e245e07e9f.jpg"
          className="cardImage"
        ></img>
        <div id="left-aligned-text" style={{ marginLeft: "5px" }}>
          <p style={{ margin: "0px", textAlign: "left" }}>
            <strong>{props.listing.title}</strong>
          </p>
          <span
            className="myInline myAlignLeft"
            style={{ paddingRight: "10px" }}
          >
            50 kr
          </span>
          <span className="myInline myAlignLeft">3 bud</span>
        </div>
        <span className="myInline myAlignRight" style={{marginRight:"7px"}}>{remainigTime()} </span>
      </div>
    </>
  );
};

export default ListingThumbnail;
