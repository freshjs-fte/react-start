import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Main from "./components/Main";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import TaskList from "./components/TaskList";
// import WantedList from "./components/WantedList";
// import CounterPage from "./pages/Counter";
// import NotFoundPage from "./pages/NotFound";

import Tree from "./components/Tree";

import { UserContext, ThemeContext } from "./contexts";

import "./App.css";
import StateHook from "./hooks/state";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "John",
        lastName: "Silverhand",
        age: 44,
        email: "example@mail.com",
      },
      theme: "DARK",
    };
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <ThemeContext.Provider value={this.state.theme}>
          <Tree />
        </ThemeContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
