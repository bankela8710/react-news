import React from 'react';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import GetCurrentDate from './utils';




const apiSport = '588a1e43d7ab4b69ac5a1bdcfbbbe85c';

function Nav() {

  const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.nav-burger');
    const navLinks = document.querySelectorAll('.nav-links li');
    //burger.addEventListener('click', ()=>{    
    nav.classList.toggle('nav-active');
    //animate for links
    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.1}s`;
    //   }
    // })
    //})
    burger.classList.toggle('toggle');
  }
  

  const styleLink = {
    color: 'while'
  };
  return (
<div className="container-wrapper">
    <nav className="nav">
      <div className="nav-logo">
        <Link className="link-logo" to="/">
         <img src={process.env.PUBLIC_URL + '/images/logo.png'}/>
        </Link>
      </div>

      <ul className="nav-links" onClick={navSlide}>
        <li > <NavLink to='/sport' activeStyle={
          { borderBottom: '3px solid white' }
        }>
          Sport
        </NavLink>
        </li>
        <li> <NavLink to='/health' activeStyle={
          { borderBottom: '3px solid white' }
        } >
          Zdravlje
        </NavLink>
        </li>
        <li><NavLink to='/science' activeStyle={
          { borderBottom: '3px solid white' }
        }>
          Nauka
        </NavLink>
        </li>
        <li><NavLink to='/entertainment' activeStyle={
          { borderBottom: '3px solid white' }
        }>
          Zabava
        </NavLink>
        </li>
        <li> <NavLink to='/business' activeStyle={
          { borderBottom: '3px solid white' }
        }>
          Biznis
        </NavLink>
        </li>
        <li >
          <NavLink to='/technology' activeStyle={
            { borderBottom: '3px solid white' }
          }  >
            Tehnologija
        </NavLink>
        </li>
      </ul>
      <div className="nav-burger" onClick={navSlide}>
        <div className="burger line1"></div>
        <div className="burger line2"></div>
        <div className="burger line3"></div>
      </div>
    </nav>
    </div>

  );



}




export default Nav;
