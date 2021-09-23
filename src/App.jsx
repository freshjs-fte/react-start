import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";

import "./App.css";

const user = {
  firstName: "John",
  lastName: "Silverhand",
  age: 44,
  email: "example@mail.com",
};

class App extends React.Component {

  render() {

    // React.createElement("div", { className: "App" }, ["TEST", Header()])
    return (
      <div className="App">
        <Header className="Header" link="/docs" />
        <Main userData={user} />
      </div>
    );
  }
}

export default App;
