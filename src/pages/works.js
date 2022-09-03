import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/works.css";
import { BiLinkExternal } from "react-icons/bi";

const IndexPage = () => {

  const pageTitle = "Curtis Babin | Works";
  const contentDescription = "The works page of Curtis Babin's website.";
  const canonicalLink = "https://www.curtisbabin.com/works";

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    
    <h1 className="heading">Works</h1>

    <div className="projectContainer">
        <h2><a href="http://steviesdetails.com" target="_" className="projectTitle">Stevie's Details&nbsp;<BiLinkExternal /></a></h2>
        
        <div className="projectImage">
            <StaticImage src="../images/steviesDetails.png" alt="Screenshot of the Stevie's Details homepage" height={400} />
        </div>

        <ul className="projectContents">
            <li>
            Orange County business's website built on Gatsby (React), HTML, CSS, JSX
            </li>
            <li>
            Responsive design with custom styling
            </li>
        </ul>
    </div>

    <div className="projectContainer">
        <h2><a href="http://store.curtisbabin.com" target="_" className="projectTitle">My Store&nbsp;<BiLinkExternal /></a></h2>
        
        <div className="projectImage">
            <StaticImage src="../images/store.png" alt="Screenshot of my store application" width={500} height={400} />
        </div>

        <ul className="projectContents">
            <li>
            Angular e-commerce application
            </li>
            <li>
            Uses the Web Storage API (localStorage) for a persisting cart across sessions
            </li>
            <li>
            Responsive design with Bootstrap styling
            </li>
        </ul>
    </div>



    </PageLayout>
  );
};

export default IndexPage;
