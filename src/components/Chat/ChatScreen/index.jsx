import React from "react";

export default function ChatScreen(props) {
  return (
    <article>
      <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
        {props.chatMsgs.map((msg) => {
          return (
            <li key={msg.id}>
              <pre>
                {" "}
                Text:{msg.text}. Time: {new Date(msg.time).toTimeString()}
              </pre>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
