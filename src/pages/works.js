import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/global.css";
import "../styles/works.css";

const IndexPage = () => {

  const pageTitle = "Curtis Babin | Works";
  const contentDescription = "The works page of Curtis Babin's website.";
  const canonicalLink = "https://www.curtisbabin.com/works";

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    
    <h1 className="heading">Works</h1>

    <div className="projects-container">
        <div className="project-container">
            <h2><a href="http://steviesdetails.com" target="_" className="project-title transition-timing">Stevie's Details&nbsp;<BiLinkExternal /></a></h2>
            
            <div className="project-image">
                <StaticImage src="../images/steviesDetails.png" alt="Screenshot of the Stevie's Details homepage" height={400} />
            </div>

            <ul className="project-contents">
                <li>
                Orange County business's website built on Gatsby (React), HTML, CSS, JSX
                </li>
                <li>
                Responsive design with custom styling
                </li>
            </ul>
        </div>

        <div className="project-container">
            <h2><a href="http://store.curtisbabin.com" target="_" className="project-title transition-timing">My Store&nbsp;<BiLinkExternal /></a></h2>
            
            <div className="project-image">
                <StaticImage src="../images/store.png" alt="Screenshot of my store application" width={500} height={400} />
            </div>

            <ul className="project-contents">
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
    </div>


    </PageLayout>
  );
};

export default IndexPage;
