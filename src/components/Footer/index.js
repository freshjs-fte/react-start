import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: new Date().getUTCFullYear(),
    };
  }

  // instance method
  addYear = () => {
    // console.log(this.state);

    // не используем
    // нет rerender (перерисовка)
    // this.state.year = this.state.year + 1;

    // новое значение  не зависит от предыдущего состояния
    // + rerender (перерисовка)
    /* this.setState({
      year: this.state.year + 1,
    }); */

    // новое значение зависит от предыдущего состояния
    // + rerender (перерисовка)
    this.setState(
      function (prevState) {
        return {
          year: prevState.year + 1,
        };
      }
    );
  };

  render() {
    return (
      <div style={{ borderTop: "1px solid black" }}>
        <div onClick={this.addYear}>
          Copyright (c) {this.state.year} Freshcode
        </div>
      </div>
    );
  }
}

export default Footer;
