import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Navbar = props => {

  return (
    <nav className="nav">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="logo" />
      </div>

      <ul>
        <li>
          <Link to="/app/home">
            <span className="text-light text-sm">home</span>
          </Link>
        </li>


        <li>
          <Link to="/">
            <span className="text-light text-sm">Login</span>
          </Link>
        </li>




        <li>
          <Link to="/register">
            <span className="text-light text-sm">Register</span>
          </Link>
        </li>


        <li>
          <Link>
            <span className="text-light text-sm">Logout</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar
