import SimpleLink from "../SimpleLink";
import logo from "./../../logo.svg";
import "./header.css";

/* 
function markup() {
  // React.createElement
  const users = ["user1", "user2", "user3"]

  const arrayOfJSX = []

  for(let index = 0; index < users.length; index++) {

    const jsx = <div> { users[index] } </div>
    arrayOfJSX.push(jsx)
  }

  return <div> { arrayOfJSX } </div>
} */

function Header(props) {
  // console.log(props);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <SimpleLink
        show={true}
        text="Learn React"
        link="https://ru.reactjs.org/"
        className="App-link"
      />
    </header>
  );
}

export default Header;
