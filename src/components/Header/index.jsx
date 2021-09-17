// named import
// import * as math from "./../../utils/math";
import logo from "./../../logo.svg";
import "./header.css";

function Header() {
  // const { mult, sqrt, sin } = math;

  // console.log(mult(2, 3));
  // console.log(sqrt(9));
  // console.log(sin(30));

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
