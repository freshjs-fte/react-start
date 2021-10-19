import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import SignUpPage from "./pages/SignUp";
// import MainPage from "./pages/Main";
import Chat from "./components/Chat";
import "./App.css";
import Header from "./components/Header";
import CounterFunc from "components/CounterFunc";

function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>


      <Switch>
        {/* <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route> */}
        <Route exact path="/counter">
          <CounterFunc></CounterFunc>
        </Route>

        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
