import SimpleLink from "../SimpleLink";
import logo from "./../../logo.svg";
import "./header.css";

function Header(props) {
  // console.log(props);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        href="https://ru.reactjs.org/"
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
