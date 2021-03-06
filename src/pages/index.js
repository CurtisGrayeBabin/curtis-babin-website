import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../styles/global.css";

const IndexPage = () => {

  const pageTitle = "Curtis Babin | Web Developer";
  const contentDescription = "The homepage of Curtis Babin's website.";
  const canonicalLink = "https://www.curtisbabin.com";

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    
    {/* Basic description that doesn't need to display */}
    <p style={{'display': 'none'}}>
    I create single page applications & fast, SEO-friendly websites. I enjoy coding and can help you with your ideas. Contact me for more!
    </p>

    {/* profile pic container */}
    <div className="homepageContent">
      
      <div style={{ "paddingRight" : "1rem" }}>
        <Link to="/about" className="link">About</Link>
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
            <td>
              <StaticImage src="../images/MeSmiling.JPG" alt="My picture" width={300} height={300} imgStyle={{ borderRadius: '100%' }} />
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
        <Link to="/works" className="link">Works</Link>
      </div>

    </div>

    

    </PageLayout>
  );
};

export default IndexPage;
