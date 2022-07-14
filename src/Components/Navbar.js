import React from "react";
import "../Style/Navbar.css";
import { Link } from 'react-scroll'
function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          </li>
          <li>
            <Link activeClass="active" to="service" spy={true} smooth={true} offset={50} duration={500}>Service</Link>
          </li>
          <li>
            <Link activeClass="active" to="menu" spy={true} smooth={true} offset={50} duration={500}>Menu</Link>
          </li>
          <li>
            <Link activeClass="active" to="reservation" spy={true} smooth={true} offset={30} duration={500}>Reservation</Link>
          </li>
 
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
