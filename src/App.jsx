import React from "react";

import Header from "./components/Header";
// import Main from "./components/Main";
import Footer from "./components/Footer";
// import TaskList from "./components/TaskList";
import SimpleLink from "./components/SimpleLink";

import "./App.css";

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
  }

  toggleShow = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };

  render() {
    // React.createElement("div", { className: "App" }, ["TEST", Header()])
    return (
      <div className="App">
        <Header />
        {/* <Main userData={user} /> */}
        {/* <TaskList></TaskList> */}

        <div onClick={this.toggleShow}>Show/Hide</div>
        {this.state.show || (
          <div>
            <SimpleLink
              show={true}
              text="Learn React"
              link="https://ru.reactjs.org/"
              className="App-link"
            />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
