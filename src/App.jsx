import React from "react";

// import Header from "./components/Header";
// import Main from "./components/Main";
// import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";
import SimpleLink from "./components/SimpleLink";

/* const user = {
  firstName: "John",
  lastName: "Silverhand",
  age: 44,
  email: "example@mail.com",
}; */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };

    // console.log("constructor");
  }
  /* 
  componentDidMount() {
    console.log('mount');
  } */

  toggleShow = () => {
    this.setState((prevState) => {

      return { show: !prevState.show };
    });
  };

  render() {
    // console.log("render");

    // React.createElement("div", { className: "App" }, ["TEST", Header()])
    return (
      <div className="App">
        {/* <Header className="Header" link="/docs" /> */}
        {/* <Main userData={user} /> */}
        {/* <TaskList></TaskList> */}


        <SimpleLink show={this.state.show} text={"Mounted"} />
        <div onClick={this.toggleShow}>On/Off</div>


        <Footer text={"Hello Footer " + 123} />
      </div>
    );
  }
}

export default App;
