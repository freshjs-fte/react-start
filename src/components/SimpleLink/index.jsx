import React from "react";

class SimpleLink extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  render() {
    console.log("render");

    if (this.props.show) {
      return (
        <a
          href={this.props.link}
          className={this.props.className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.text}
        </a>
      );
    }
    return <div>None</div>;
  }
}

export default SimpleLink;
