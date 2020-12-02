import React from "react";
import {} from "reactstrap";
import "../css/thumbnail.css";

const listingThumbnail = (props) => {
  return (
    <>
      <div class="card card-1" style={{ padding: "2px" }}>
        <img
          src="https://img.tradera.net/images/865/381093865_97d590d0-90e0-4ef9-a7a7-40e245e07e9f.jpg"
          className="cardImage"
        ></img>
        <p style={{ margin: "0px" }}>
          <strong>Grå byxor, slitna</strong>
        </p>
        <span className="myInline myAlignLeft" style={{ paddingRight: "10px" }}>
          50 kr
        </span>
        <span className="myInline myAlignLeft">3 bud</span>
        <span className="myInline myAlignRight"> 4 min</span>
      </div>
    </>
  );
};

export default listingThumbnail;
