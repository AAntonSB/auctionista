import React from "react";
import {} from "reactstrap";
import "../css/thumbnail.css";

const listingThumbnail = (props) => {
  return (
    <>
      <div class="card card-1" style={{ padding: "2px" }}>
        <img
          src="data:image/jpeg;base64,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"
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

      <div class="card card-1" style={{ padding: "2px" }}>
        <img
          src="data:image/jpeg;base64,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"
          className="cardImage"
        ></img>
        <p style={{ margin: "0px" }}>
          <strong>Grå byxor, slitna</strong>
        </p>
        <div style={{ position: "absolute", bottom: "0" }}>
          <div style={{position: "initial"}}>
            <span
              className="myInline myAlignLeft"
              style={{ paddingRight: "10px" }}
            >
              50 kr
            </span>
            <span className="myInline myAlignLeft">3 bud</span>
            <span className="myInline myAlignRight"> 1 min</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default listingThumbnail;
