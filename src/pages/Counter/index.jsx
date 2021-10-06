import React, { Component } from "react";
import Counter from "../../components/Counter";

export default class CounterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      obj: { test: 123 },
    };
  }

  handleStepChange = (event) => {
    const {
      target: { value: step },
    } = event;

    this.setState({ step: Number(step) });
  };

  handleObjChange = () => {
    this.setState({ obj: { test: 123, asd: 234 } });
  };

  render() {
    const jsx = (
      <div>
        <input
          type="range"
          name="step"
          value={this.state.step}
          onChange={this.handleStepChange}
        />

        <input
          type="number"
          name="step"
          value={this.state.step}
          onChange={this.handleStepChange}
        />

        <button onClick={this.handleObjChange}>Obj</button>
      </div>
    );

    return (
      <div>
        {jsx}
        <Counter step={this.state.step} obj={this.state.obj} />
      </div>
    );
  }
}
