import React from "react";
import { Link } from "gatsby";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/global.css";
import "../styles/navbar.css";


function SideMenu(props) {

  return props.open ? (
    
      <nav aria-label="Side Menu Navigation" className="side-menu-container bottom-shadow">
          <ul>
              <li><Link to="/" className="side-menu-link transition-timing">Home&nbsp;<BiLinkExternal /></Link></li>
              <li><Link to="/About" className="side-menu-link transition-timing">About&nbsp;<BiLinkExternal /></Link></li>
              <li><Link to="/Works" className="side-menu-link transition-timing">Works&nbsp;<BiLinkExternal /></Link></li>
              <li><a href="https://github.com/CurtisGrayeBabin" target="_" className="side-menu-link transition-timing">GitHub&nbsp;<BiLinkExternal /></a></li>
              <li><a href="https://www.linkedin.com/in/curtisbabin/" target="_" className="side-menu-link transition-timing">LinkedIn&nbsp;<BiLinkExternal /></a></li>
          </ul>
      </nav>
      )
      : 
      <></>
}

export default SideMenu;