import React, { useContext, useEffect } from "react";
import { MessageContext } from "../contexts/MessageContextProvider";
import Message from "./Message";
import NewMessage from "./NewMessage";

const PrintMessages = () => {
  const { messageList, fetchAllMessages } = useContext(MessageContext);

  useEffect(() => {
    fetchAllMessages();
  }, []);

  return (
    <div>
      <NewMessage />
      {messageList.map((e) => {
        return <Message key={e.id} message={e} />;
      })}
    </div>
  );
};

export default PrintMessages;
