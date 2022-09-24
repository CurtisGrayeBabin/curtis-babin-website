import * as React from "react";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../styles/global.css";

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
      <button id="click-me-button" onClick={buttonClicked} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        +1
      </button>

      <span>{count ? count : ""}</span>
    </div>
    

    {/* profile pic container */}
    <div className="homepage-content">
      
      <div style={{ "paddingRight" : "1rem" }}>
        <Link to="/About" className="link">About</Link>
      </div>

      <div>
        <table>
          <tbody>
          <tr>
            <td align="center">
              <a href="https://github.com/CurtisGrayeBabin" target="_" className="link">GitHub</a>
            </td>
          </tr>
          <tr>
            <td align="center" style={{"width":"fit-content"}}>
              <StaticImage src="../images/MeSmiling.JPG" alt="My picture" width={350} height={350} className="homepage-image-wrapper" />
            </td>
          </tr>
          <tr>
            <td align="center">
              <a href="https://www.linkedin.com/in/curtisbabin/" target="_" className="link">LinkedIn</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div style={{ "paddingLeft" : "1rem" }}>
        <Link to="/Works" className="link">Works</Link>
      </div>

    </div>
    

    </PageLayout>
  );
};

export default IndexPage;
//<StaticImage src="../images/MeSmiling.JPG" alt="My picture" imgClassName="me-homepage-image" />


