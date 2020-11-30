import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import GetCurrentDate from './utils';

const apiSport= '588a1e43d7ab4b69ac5a1bdcfbbbe85c';

function Nav() {

  const styleLink = {
    color: 'while'
  };
  return (
    <nav className="nav">
      <h3><p>Sve vesti na jednom mestu</p>
        <p>sa svih portala u Srbiji</p>
        <p style={{ textTransform: 'uppercase' }}>najnovije vesti za : <GetCurrentDate /></p>
      </h3>
      <ul className="nav-links">
        <li> <NavLink to='/sport' activeStyle={
          { color: 'aqua' }
        }>
          Sport
        </NavLink>
        </li>
        <li> <NavLink to='/health' activeStyle={
          { color: 'aqua' }
        } >
          Zdravlje
        </NavLink>
        </li>
        <li><NavLink to='/science' activeStyle={
          { color: 'aqua' }
        }>
          Nauka
        </NavLink>
        </li>
        <li><NavLink to='/entertainment' activeStyle={
          { color: 'aqua' }
        }>
          Zabava
        </NavLink>
        </li>
        <li> <NavLink to='/business' activeStyle={
          { color: 'aqua' }
        }>
          Biznis
        </NavLink>
        </li>
        <li >
          <NavLink to='/technology' activeStyle={
          { color: 'aqua' }
        }  >
            Tehnologija
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
