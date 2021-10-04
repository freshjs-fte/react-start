import React from "react";

// import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";
// import TaskList from "./components/TaskList";
// import WantedList from "./components/WantedList";

import Link from "./components/Link";
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

    this.state = {
      show: true,

      location: "/",
    };
  }

  toggleShow = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };

  switchRouter = () => {
    const MainPage = <Main userData={user} />;

    if (window.location.pathname !== this.state.location) {
      this.setState({
        location: window.location.pathname,
      });
    }
    
    switch (window.location.pathname) {
      case "/": {
        return MainPage;
      }

      default:
        return "404 NOT FOUND";
    }
  };

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/about">About</Link>
        </nav>

        {this.switchRouter()}
        {/* <WantedList></WantedList> */}

        {/* <Header /> */}
        {/* <TaskList></TaskList> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
