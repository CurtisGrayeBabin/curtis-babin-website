import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../styles/index.css";

const IndexPage = () => {


  return (
    <Layout pageTitle="Curtis Babin | Web Developer">
    
    {/* Basic description that doesn't need to display */}
    <p style={{'display': 'none'}}>
    I create single page applications & fast, SEO-friendly websites. I enjoy coding and can help you with your ideas. Contact me for more!
    </p>

    {/* profile pic container */}
    <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "height": "85vh"}}>
      
      <div>
        <Link to="/about" className="link">About</Link>&nbsp;
      </div>

      <div>
        <table>
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
        </table>
      </div>

      <div>
      &nbsp;<Link to="/works" className="link">Works</Link>
      </div>

    </div>

    

    </Layout>
  );
};

export default IndexPage;
