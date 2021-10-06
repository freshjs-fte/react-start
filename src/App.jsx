import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Main from "./components/Main";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import TaskList from "./components/TaskList";
// import WantedList from "./components/WantedList";
// import CounterPage from "./pages/Counter";

import Tree from "./components/Tree";
import NotFoundPage from "./pages/NotFound";

import { UserContext } from "./contexts";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    // instance
    this.state = {
      user: {
        firstName: "John",
        lastName: "Silverhand",
        age: 44,
        email: "example@mail.com",
      },
    };
    // instance
    this.handleStepChange = function () {};
  }

  // instance
  handleStepChange = () => {};

  // prototype
  handleStepChange() {}

  // class
  static handleStepChange() {}

  render() {
    return (
      <Router>
        <UserContext.Provider value={this.state.user}>
          <Switch>
            <Route exact path="/" component={Tree} />

            <Route path="*" component={NotFoundPage} />

            {/* <TaskList></TaskList> */}
            {/* <Header /> */}
            {/* <Footer /> */}
          </Switch>
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
