import React, { useEffect } from "react";
import {} from "reactstrap";
import "../css/thumbnail.css";

const ListingThumbnail = (props) => {
   
  useEffect(()=>{
    console.log((Math.round((props.listing.endDate - new Date())/ (24*60*60*1000))));
  },[]);

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
        <p style={{ margin: "0px" }}>
          <strong>{props.listing.title}</strong>
        </p>
        <span className="myInline myAlignLeft" style={{ paddingRight: "10px" }}>
          50 kr
        </span>
        <span className="myInline myAlignLeft">3 bud</span>
        <span className="myInline myAlignRight">{remainigTime()} </span>
      </div>
    </>
  );
};

export default ListingThumbnail;
