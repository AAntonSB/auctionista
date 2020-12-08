import React, { useEffect, useState } from "react";
import "../css/thumbnail.css";

const TimeLeft = (props) => {
 const [isActive, setIsActive] = useState(true);
 const [timeLeft, setTimeLeft] = useState();
 let interval = null;

useEffect(() => {
  if (isActive) {
    interval = setInterval(() => {
      let distance = props.listing.endDate - new Date();
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      let time = null;
      if (days > 0) {
        time = days + " days left";
      } else if (hours > 0) {
        time = hours + "h " + minutes + "m " + seconds + "s";
      } else if (minutes > 0) {
        time = minutes + "m " + seconds + "s";
      } else if (seconds > 0) {
        time = seconds + "s";
      } else {
        setIsActive(false);
      }
      setTimeLeft(time);
    }, 500);
  }
}, [isActive, timeLeft]);

return (
  <p style={{ margin: "0px" }} className="thumbnail-name">
    <strong>{props.listing.title}</strong>
  </p>
);

}
export default TimeLeft;