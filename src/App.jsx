import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import MainPage from "./pages/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
