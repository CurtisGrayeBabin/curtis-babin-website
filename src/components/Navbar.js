import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { nav } from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={nav}>
      <div>Curtis Babin</div>
      <GiHamburgerMenu />
    </nav>
  );
}

export default Navbar;
