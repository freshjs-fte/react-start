import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import MainPage from "./pages/Main";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route> */}

        <Route exact path="/chat">
          <Chat />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
