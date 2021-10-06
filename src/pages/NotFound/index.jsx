import React, { Component } from "react";

export default class NotFoundPage extends Component {
  componentDidMount() {
    console.log("did mount");
    setTimeout(() => this.props.history.push("/"), 5000);
    console.log(this.props.location);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    console.log(this.props.history);
    return <div>404 NOT FOUND</div>;
  }
}
