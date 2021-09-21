import React from "react";

function Main(props) {
  const {
    userData: { firstName, lastName, email },
  } = props;

  const fullName = `${firstName} ${lastName}`

  // React.createElement
  return (
    <div>
      <div>
        <div inline>UserPhoto</div>
        <div inline>{firstName} {lastName}</div>
      </div>

      <div>Description</div>
    </div>
  );
}

export default Main;
