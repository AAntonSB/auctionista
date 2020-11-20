import React, { createContext, useState } from "react";
export const MessageContext = createContext();

const MessageContextProvider = (props) => {
  const [messageList, setMessages] = useState([]);

  const updateMessages = (updates) => {
    setMessages(messageList.concat(updates));
  };

  const addMessage = (message) => {
    setMessages(messageList.shift(message));
  };

  const fetchAllMessages = async () => {
    let messages = await fetch("rest/v1/messages");
    messages = await messages.json();

    messages.sort((m1, m2) => (m1.timestamp > m2.timestamp ? 1 : -1));

    updateMessages(messages);
  };

  const values = {
    messageList,
    fetchAllMessages,
  };

  return (
    <MessageContext.Provider value={values}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
