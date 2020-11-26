import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const apiSport = '588a1e43d7ab4b69ac5a1bdcfbbbe85c';
function Nav() {

  const styleLink={
    color:'while'
  };
  return (
    <nav className="nav">
      <h3>News
      online
        </h3>
      <ul className="nav-links">
        <Link to='/sport'>
          <li>Sport</li>
        </Link>
        <Link to='/health' >
        <li>Health</li>
        </Link>
        <Link to='/science'>
        <li>Science</li>
        </Link>
        <Link to='/entertainment' >
        <li>Entertainment</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
