import React, { useEffect } from "react";
import {} from "reactstrap";
import "../css/thumbnail.css";

const ListingThumbnail = (props) => {
   
  useEffect(()=>{
    console.log((Math.round((props.listing.endDate - new Date())/ (24*60*60*1000))));
  },[]);

  const remainigTime = () =>{
    let daysLeft =  (props.listing.endDate - new Date())/ (24*60*60*1000); 
     let time = 0;
    if(Math.trunc(daysLeft)>0){
      time =  Math.round(daysLeft);
    }else if(Math.trunc(daysLeft<0)){

      console.log("Less than one day left")
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
        <span className="myInline myAlignRight">{remainigTime()} days left</span>
      </div>
    </>
  );
};

export default ListingThumbnail;
