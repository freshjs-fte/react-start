import Header from "./components/Header";
import Main from "./components/Main"
import "./App.css";

function App() {
  return (
    // React.createElement("div", {className: "App"}, [...])
    <div className="App">
      TEST
      <Header />
      <Main />
    </div>
  );
}

// import 
// const Module = require('./')

// export
// полный, дефолтный
// аналог module.exports = App
// App - default
export default App;
// import App from './App';

// именованный
// аналог module.exports.test = 123
// exports.test - именованный
// export const test1 = App;
// export const test2 = 234;
// import * as App from './App';
// App.default
// App.test1
