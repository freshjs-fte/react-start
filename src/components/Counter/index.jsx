import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

/* 
  Когда стоит использовать PureComponent
1) Простые свойства (примитивные типы) (без ссылок) пропсов и состояния
2) Все пропсы и всё состояние должны влиять на рендер
*/

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };

    this.mainPage = require(`../../localization/${this.props.lang}/mainPage`);
    this.intID = null;
  }

  increase = () => {
    this.setState((prevState) => ({
      score: prevState.score + this.props.step,
    }));
  };

  componentDidMount() {
    const intervalID = setInterval(this.increase, 1000)
    this.intID = intervalID
  }

  componentWillUnmount() {
    clearInterval(this.intID)
  }

  render() {
    console.log("render");

    const { score } = this.state;
    // const {} = this.props

    return (
      <div>
        <div>
          {this.mainPage.score}: {score}
        </div>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number,
};

Counter.defaultProps = {
  step: 1,
  lang: "ru-RU",
};
