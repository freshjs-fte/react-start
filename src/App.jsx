import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TaskList from "./components/TaskList";
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
        TEST
        <Header link="/docs" />
        <Main userData={user} />
        <TaskList />
      </div>
    );
  }
}

export default App;
