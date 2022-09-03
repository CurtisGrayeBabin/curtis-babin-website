import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const IndexPage = () => {

  const pageTitle = "Curtis Babin | About";
  const contentDescription = "The about page of Curtis Babin's website.";
  const canonicalLink = "https://www.curtisbabin.com/about";

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    
    <h1 className="heading">About</h1>

    <p className="contentText">
    I am a freelance developer; I have been a professional developer since 2017. 
    I enjoy creating websites, applications, and whatever helps others realize their goals! 
    My alma mater is the University of California, Irvine, where I earned my Bachelor of Science degree in Computer Science. 
    I have also completed two bootcamps concerning website development with a specialization in Node.js.
    Please feel free to email me regarding inquiries: curtis [at] curtisbabin [dot] com
    </p>

    <div style={{"display": "flex", "justifyContent": "space-evenly", "alignItems": "center", "flexWrap": "wrap", "paddingTop": "1rem"}}>
        <StaticImage src="../images/codecademycert.jpg" alt="My CodeCademy Web Developer certification image" width={400} height={300} />
        <StaticImage src="../images/udacity.jpg" alt="My Udacity Nanodegree image" width={400} height={300} style={{border: "1px solid black"}} />
    </div>

    </PageLayout>
  );
};

export default IndexPage;
