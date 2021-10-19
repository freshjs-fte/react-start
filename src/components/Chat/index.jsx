import React, { useState } from "react";
import ChatForm from "./ChatForm";
import ChatScreen from "./ChatScreen";

export default function Chat() {
  const [chatMessages, setChatMessages] = useState([]);

  const onSubmit = (values, formikBag) => {
    console.log(values.text);

    setChatMessages((prevMessages) => {
      const newMsg = {
        text: values.text,
        id: prevMessages.length,
        time: Date.now(),
      };

      const newMessages = [...prevMessages, newMsg];
      return newMessages;
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
