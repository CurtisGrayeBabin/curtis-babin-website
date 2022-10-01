import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "gatsby";
import SideMenu from "../components/SideMenu";
import Headroom from "react-headroom";
import "../styles/navbar.css";
import "../styles/layout.css";

function Navbar() {

  // determines if side menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <Headroom disableInlineStyles>
      <nav className="nav layout-navbar">
        <Link to="/" className="link-H1">
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


        {/* Side Menu */}

          <button onClick={() => setMenuOpen(!menuOpen)}>
              {
                menuOpen ? 

                  <IconContext.Provider value={{ title: "Side-menu close button", className: "side-menu" }}>
                    <VscChromeClose />
                  </IconContext.Provider>
            
                  :

                  <IconContext.Provider value={{ title: "Side-menu open button", className: "side-menu" }}>
                    <GiHamburgerMenu />
                  </IconContext.Provider>
                          
              }
          </button>
          


      </nav>

      {menuOpen && <SideMenu /> }


    </Headroom>
  );
}

export default Navbar;
