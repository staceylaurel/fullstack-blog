import * as React from "react";
import { Link } from "react-router-dom";
import { logout } from "../utils/api-service";

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className="nav-link active">
          Blog Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/newblog" className="nav-link">
          Create A New Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/donate" className="nav-link">
          Save the Clocktower!
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
      <li className="nav-item ml-auto">
        <button className="btn btn-outline-danger " onClick={logout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

interface NavBarProps {}

export default NavBar;
