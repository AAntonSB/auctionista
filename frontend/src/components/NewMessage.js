import React, { useState } from "react";
import {send, sendMessage, connect, data} from '../socket.js'


const NewMessage = () => {
  const [newMessage, setNewMessage] = useState();

  const SendNewMessage = async (e, message) => {
    e.preventDefault() 
    let newMessage = {
      sender: "anon",
      content: message,
      // timestamp: Date.now,
    };

    setNewMessage("");

    sendMessage(newMessage)

    // let res = await fetch("rest/v1/messages", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newMessage),
    // });

    // res = await res.json();
    // console.log(res);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="type new message..."
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      />
      <button onClick={(e) => {SendNewMessage(newMessage) }}>Send</button>
    </form>
  );
};

export default NewMessage;
