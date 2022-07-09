import React from "react";
import { Link } from "gatsby";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/sideMenu.css";

function SideMenu() {
  return (
    <nav aria-label="Side Menu Navigation" className="sideMenuContainer">
        <ul>
            <li><Link to="/" className="sideMenuLink">Home&nbsp;<BiLinkExternal /></Link></li>
            <li><Link to="/about" className="sideMenuLink">About&nbsp;<BiLinkExternal /></Link></li>
            <li><Link to="/works" className="sideMenuLink">Works&nbsp;<BiLinkExternal /></Link></li>
            <li><a href="https://github.com/CurtisGrayeBabin" target="_" className="sideMenuLink">GitHub&nbsp;<BiLinkExternal /></a></li>
            <li><a href="https://www.linkedin.com/in/curtisbabin/" target="_" className="sideMenuLink">LinkedIn&nbsp;<BiLinkExternal /></a></li>
        </ul>
    </nav>
  );
}

export default SideMenu;


