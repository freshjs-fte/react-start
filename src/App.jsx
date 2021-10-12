import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import { ThemeContext } from "./contexts";

import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  const themeState = useState("LIGHT");

  return (
    <ThemeContext.Provider value={themeState}>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>

      <Main show={show}></Main>
      
    </ThemeContext.Provider>
  );
}

export default App;
