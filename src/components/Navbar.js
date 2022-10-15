import React, { useState } from "react";
import { Link } from "gatsby";
import SideMenu from "../components/SideMenu";
import Headroom from "react-headroom";
import "../styles/global.css";
import "../styles/navbar.css";
import "../styles/layout.css";
import "../styles/hamburger.css";


function Navbar() {

  // determines if side menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);


  const hamburgerClickHandler = () => {
    setMenuOpen(!menuOpen);
    // toggle hamburger menu animations
    let menu = document.querySelector(".hamburger");
    menu.classList.toggle("is-active");

    // need to toggle aria-expanded for users with screen-readers
    // credit: https://stackoverflow.com/questions/69888378/toggle-aria-expanded-between-true-and-false-with-javascript
    menu.setAttribute(
      'aria-expanded', 
      `${!(menu.getAttribute('aria-expanded') === 'true')}`
    );
  }

  return (
    <Headroom disableInlineStyles>
      <nav aria-label="Page navigation bar" className="nav layout-navbar">
        <Link to="/" className="link-H1 transition-timing">
          <div style={{"paddingRight" : ".5rem"}}>
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
          </div>

          <h1>Curtis Babin <span style={{"display":"inline-block"}}>| Web Developer</span></h1>
        </Link>


        {/* Hamburger Menu Magic */}

        <button onClick={() => hamburgerClickHandler()} className="hamburger hamburger--squeeze shrink" type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
          <span className="hamburger-box">
            <span className="hamburger-inner">
            </span>
          </span>
        </button>  

      </nav>

      {/* May need to move this up inside prev nav tag - leaving this here for now */}
      <div id="navigation">
        <SideMenu open={menuOpen} />
      </div>


    </Headroom>

  );
}

export default Navbar;
