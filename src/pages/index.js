import * as React from "react";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import {IconContext} from "react-icons";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import PageLayout from "../components/PageLayout";
import "../styles/global.css";
import "../styles/layout.css";


const IndexPage = () => {

  const pageTitle = "Curtis Babin | Web Developer";
  const contentDescription = "The homepage of Curtis Babin's website.";
  const canonicalLink = "https://www.curtisbabin.com";

  // using local storage for saving incremental counts
  const counterStorageString = "curtisbabincountervalue";
  var [count, updateCount] = useState(0);

  // if there's a previous counter value then restore it
  let previousCount = typeof window !== 'undefined' && window.localStorage.getItem(counterStorageString);

  if (previousCount){
    count = parseInt(previousCount);
  }

  const buttonClicked = event => {
    updateCount(count+1);
    typeof window !== 'undefined' && window.localStorage.setItem(counterStorageString, count+1);
  }

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    
    {/* Basic description that doesn't need to display */}
    <p style={{'display': 'none'}}>
      I create single page applications & fast, SEO-friendly websites. I enjoy coding and can help you with your ideas. Contact me for more!
    </p>

  
    <div className="click-me-div">
      <button id="click-me-button" onClick={buttonClicked} className="transition-timing bg-transparent hover:border-transparent hover:bg-blue-500 hover:text-white text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded">
        +1
      </button>

      <span>{count ? count : ""}</span>
    </div>
    

    {/* profile pic container */}
    <div className="homepage-content">
      
      <div>
        <Link to="/About" className="link transition-timing homepage-link-size">About&nbsp;<div><IconContext.Provider value={{ "className":"homepage-link-size" }}><BiLinkExternal /></IconContext.Provider></div></Link>
      </div>

      <div>
        <table>
          <tbody>
          <tr>
            <td align="center">
              <a href="https://github.com/CurtisGrayeBabin" target="_" className="link transition-timing homepage-link-size">GitHub&nbsp;<BiLinkExternal /></a>
            </td>
          </tr>
          <tr>
            <td align="center" style={{"width":"fit-content"}}>
              <StaticImage src="../images/MeSmiling.JPG" alt="My picture" width={350} height={350} className="homepage-image-wrapper" imgStyle={{"borderRadius":"100%"}} />
            </td>
          </tr>
          <tr>
            <td align="center">
              <a href="https://www.linkedin.com/in/curtisbabin/" target="_" className="link transition-timing homepage-link-size">LinkedIn&nbsp;<BiLinkExternal /></a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div>
        <Link to="/Works" className="link transition-timing homepage-link-size">Works&nbsp;<div><IconContext.Provider value={{ "className":"homepage-link-size" }}><BiLinkExternal /></IconContext.Provider></div></Link>
      </div>

    </div>
    

    </PageLayout>
  );
};

export default IndexPage;
//<StaticImage src="../images/MeSmiling.JPG" alt="My picture" imgClassName="me-homepage-image" />


