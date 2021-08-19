import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
