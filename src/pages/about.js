import * as React from "react";
import PageLayout from "../components/PageLayout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";
import "../styles/layout.css";

const IndexPage = () => {

  const pageTitle = "Curtis Babin | About";
  const contentDescription = "The about page of Curtis Babin's website.";
  const canonicalLink = "https://www.curtisbabin.com/about";

  return (
    <PageLayout pageTitle={pageTitle} contentDescription={contentDescription} canonicalLink={canonicalLink}>
    
    <h1 className="heading">About</h1>

    <p id="about-content-text">
    I have been both a professional & hobbyist software developer since 2017. Professionally I work with the ASP.NET MVC framework, and at home, I employ the Node.js environment with React. I enjoy creating websites and applications with a focus on the look and feel of the front end. My alma mater is the University of California, Irvine, where I earned my Bachelor of Science degree in Computer Science. Since then I have also completed two online bootcamps concerning website development with a specialization in Node.js. Please feel free to email me regarding inquiries: curtis [at] curtisbabin [dot] com
    </p>

    <div className="certificate-container">
        <StaticImage src="../images/codecademycert.jpg" alt="My Codecademy Web Development Career Path certification" width={400} height={300} />
        <StaticImage src="../images/udacity.jpg" alt="My Udacity Full Stack JavaScript Developer Nanodegree certification" width={400} height={300} />
    </div>

    </PageLayout>
  );
};

export default IndexPage;
