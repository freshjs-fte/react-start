import React from "react";

const Link = (props) => {
  const goToLink = (event) => {
    const link = event.target.dataset.link;

    window.history.pushState({}, "", link);
  };

  return (
    <div
      style={{ textDecoration: "underline", color: "blue", cursor: 'pointer' }}
      data-link={props.to}
      onClick={goToLink}
    >
      {props.children}
    </div>
  );
};

export default Link;
