import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";
// import TaskList from "./components/TaskList";
import WantedList from "./components/WantedList";

import "./App.css";

const user = {
  firstName: "John",
  lastName: "Silverhand",
  age: 44,
  email: "example@mail.com",
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/wanted">Wanted</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                console.log(props);
                return <Main userData={user} {...props} />;
              }}
            />
            <Route exact path="/wanted">
              <WantedList />
            </Route>

            <Route path="*">404 NOT FOUND</Route>
            {/* <TaskList></TaskList> */}

            {/* <Header /> */}
            {/* <Footer /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
