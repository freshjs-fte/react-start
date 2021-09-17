import React from "react";
import constants from "./../../constants";

function Main(props) {
  console.log(props);

  const action = function () {
    props.setTime(32);
  };

  // conditional render
  // условный рендеринг
  if (props.seconds > 31) {
    return (
      <div className={props.className}>
        Hello From REACT {constants.cardNumber}
      </div>
    );
  }
  return <b onClick={action}>None</b>;
}

export default Main;
