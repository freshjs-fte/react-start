import React from "react";

export default function ChatScreen(props) {
  return (
    <article>
      <ul>
        {props.chatMsgs.map((msg) => {
          return <li>{msg}</li>;
        })}
      </ul>
    </article>
  );
}
