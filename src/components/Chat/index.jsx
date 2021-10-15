import React, { useState } from "react";
import ChatForm from "./ChatForm";
import ChatScreen from "./ChatScreen";

export default function Chat() {
  const [chatMessages, setChatMessagse] = useState([]);

  const onSubmit = (values, formikBag) => {
    console.log(values.text);

    setChatMessagse((prevMessages) => {

      /* Добавить новое сообщение в state */
      const newState = [
        /* старые сообщения prevMessages */
        /* плюс новое values.text */
      ];

      return newState;
    });
    formikBag.resetForm();
  };

  return (
    <div>
      <ChatForm onSubmit={onSubmit} />
      <ChatScreen chatMsgs={chatMessages} />
    </div>
  );
}
