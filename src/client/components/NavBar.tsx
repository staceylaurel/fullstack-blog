import * as React from "react";
import { Link } from "react-router-dom";

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
    </ul>
  );
};

interface NavBarProps {}

export default NavBar;