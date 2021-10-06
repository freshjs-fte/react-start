import React from "react";
import { UserContext } from "../../../../contexts";

export default class Child extends React.Component {
  render() {
    return (
      <div>
        <div> CHILD</div>
        <pre>{JSON.stringify(this.context, null, 4)}</pre>
      </div>
    );
  }
}

Child.contextType = UserContext;
