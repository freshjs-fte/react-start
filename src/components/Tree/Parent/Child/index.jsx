import React from "react";
import { UserContext } from "../../../../contexts";
import { withContext } from "../../../HOCs";

class Child extends React.Component {
  render() {
    return (
      <>
        <div> CHILD</div>
        <div>{this.props.theme}</div>
        <pre>{JSON.stringify(this.props.context, null, 4)}</pre>
      </>
    );
  }
}

const withUser = withContext(Child, UserContext);

export default withUser;
