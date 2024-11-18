import React from 'react'
import '../Styles/Navbar.css';

const Navbar = () => {

    return(
        <div class="navbar">
  <div class="nav-logo">
    <a><h2>LOGO</h2>{/*<img src="#"></img>*/}</a>
  </div>
  <div class="nav-menu-mobile" data-status="closed">
    <span>MENU</span>
    <i class="menu-toggle fa-solid fa-bars"></i>
  </div>
  <ul class="nav-menu">
    <li><a class="nav-menu-item" href="#">Home</a></li>
    <li><a class="nav-menu-item" href="#">Info</a></li>
    <li><a class="nav-menu-item" href="#">Contact</a></li>
    <li><div class="nav-menu-item nav-dropdown">
      About
      <a class="dropdown-item">Dropdown Item 1</a>
      <a class="dropdown-item">Dropdown Item 2</a>
      <a class="dropdown-item">Dropdown Item 3</a>
      <a class="dropdown-item">Dropdown Item 4</a>
        
      </div></li>
    <li><a class="nav-menu-item" href="#">More</a></li>
  </ul>
  
</div>
    )
};

export default Navbar