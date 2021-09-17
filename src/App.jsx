import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import "./App.css";

function App() {
  // React.createElement("div", { className: "App" }, [])
  return (
    <div className="App" id="123">
      TEST
      <Header className="App" />
      <Main />
    </div>
  );
}

export default App;

