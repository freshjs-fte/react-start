import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.lang);
    
    this.state = {
      time: new Date().getSeconds()
    };
  }

  render() {
    React.createElement("div", { className: "App" }, ["TEST", Header()])
    return (
      <div className="App" id="123" asd="asd">
        TEST
        <Header />
        <Main seconds={this.state.time} setTime={this.state.setTime} />
      </div>
    );
  }
}

export default App;
