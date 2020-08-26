import * as React from "react";
import { Link } from "react-router-dom";
import { logout } from "../utils/API";

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className="nav-link active" data-toggle="tab" href="#home">
          Blog Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/newblog" className="nav-link" data-toggle="tab" href="#newblog">
          Create A New Blog
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/register" className="nav-link" data-toggle="tab" href="#register">
          Register
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/profile" className="nav-link" data-toggle="tab" href="#profile">
          Profile
        </Link>
         </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link" data-toggle="tab" href="#login">
          Login
        </Link>
        <button className="btn btn-danger " onClick={logout}>Logout</button>
      </li>
    </ul>
  );
};

interface NavBarProps {}

export default NavBar;