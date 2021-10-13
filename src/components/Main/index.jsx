import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link to="/signup">Sign-up</Link>
          </li>
        </ul>
      </nav>
      <h1>HOME</h1>
    </div>
  );
}

export default Main;
