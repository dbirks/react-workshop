import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";

export function Nav() {
  const { name} = useUserContext();

  return (
    <nav>
      <p>Hello {name}!</p>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
