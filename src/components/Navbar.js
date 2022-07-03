import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import "../styles/navbar.css";
import "../styles/layout.css";

function Navbar() {
  return (
    <Headroom>
      <nav className="nav layoutNavbar">
        <Link to="/" className="linkH1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          &nbsp;
          <h1>Curtis Babin | Web Developer</h1>
        </Link>

        <IconContext.Provider
          value={{ title: "Side-menu button", className: "sideMenu" }}
        >
          <div>
            <GiHamburgerMenu />
          </div>
        </IconContext.Provider>
      </nav>
    </Headroom>
  );
}

export default Navbar;
