import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const IndexPage = () => {

  const pageTitle = "Curtis Babin | About";
  const contentDescription = "The about page of Curtis Babin's website.";
  const canonicalLink = "https://www.curtisbabin.com/about";

  return (
    <Layout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    
    <h1 className="heading">About</h1>

    <p className="contentText">
    I am a programmer with over four years of professional experience. 
    I enjoy creating websites and helping others realize their goals. 
    I graduated from UC Irvine with my B.S. in Computer Science and have completed a couple of coding boot camps over the years. 
    Feel free to email me regarding inquiries: curtis [at] curtisbabin [dot] com
    </p>

    <div style={{"display": "flex", "justifyContent": "space-evenly", "alignItems": "center", "flexWrap": "wrap", "paddingTop": "1rem"}}>
        <StaticImage src="../images/udacity.jpg" alt="My Udacity Nanodegree image" width={400} height={300} />
        <StaticImage src="../images/codecademycert.jpg" alt="My CodeCademy Web Developer certification image" width={400} height={300} />
    </div>

    </Layout>
  );
};

export default IndexPage;
