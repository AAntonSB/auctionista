import React from "react";

const Message = (props) => {
  const myStyle = {
    margin: "5px 0",
    width: "300px",
    borderTop: "1px solid gray",
  };

  return (
    <div style={myStyle}>
      <p>Timestamp: {new Date(props.message.timestamp).toLocaleString()}</p>
      <strong>Sender: {props.message.sender}</strong> : Message: {props.message.content}
    </div>
  );
};

export default Message;
