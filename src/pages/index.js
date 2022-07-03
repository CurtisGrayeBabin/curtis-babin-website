import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/index.css";

const IndexPage = () => {


  return (
    <Layout pageTitle="Curtis Babin | Web Developer">
    
    

    {/* profile pic container */}
    <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "height": "85vh"}}>
      
      <div>
        <a href="/" className="link">About</a>&nbsp;
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
              <StaticImage src="../images/github profile.png" alt="My picture" width={300} height={300} imgStyle={{ borderRadius: '100%' }} />
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
      &nbsp;<a href="/" className="link">Works</a>
      </div>

    </div>

    

    </Layout>
  );
};

export default IndexPage;
