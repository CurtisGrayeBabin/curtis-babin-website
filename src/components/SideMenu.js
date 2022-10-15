import React from "react";
import { Link } from "gatsby";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/navbar.css";


function SideMenu(props) {

  return props.open ? (
    
      <nav aria-label="Side Menu Navigation" className="side-menu-container bottom-shadow">
          <ul>
              <li><Link to="/" className="side-menu-link">Home&nbsp;<BiLinkExternal /></Link></li>
              <li><Link to="/About" className="side-menu-link">About&nbsp;<BiLinkExternal /></Link></li>
              <li><Link to="/Works" className="side-menu-link">Works&nbsp;<BiLinkExternal /></Link></li>
              <li><a href="https://github.com/CurtisGrayeBabin" target="_" className="side-menu-link">GitHub&nbsp;<BiLinkExternal /></a></li>
              <li><a href="https://www.linkedin.com/in/curtisbabin/" target="_" className="side-menu-link">LinkedIn&nbsp;<BiLinkExternal /></a></li>
          </ul>
      </nav>
      )
      : 
      <></>
}

export default SideMenu;