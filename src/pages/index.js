import * as React from "react";
import Layout from "../components/layout";
import { increase, contact, border, about } from "./index.module.css";
import { layoutPadding } from "../global styles/layout.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Curtis Babin | Web Developer">
      <section className={`${layoutPadding} ${border}`}>
        <h1 className={increase}>
          Grow your business with a fast, modern, & SEO-focussed website
        </h1>
        <h2 className={contact}>Contact me below for more details</h2>
      </section>
      <section className={`${layoutPadding}`}>
        <div className={about}>
          <h3>About</h3>
          <p>
            I am a professional web developer with over{" "}
            {new Date().getFullYear() - 2017} years of experience in HTML, CSS,
            and JavaScript. My Bachelor of Science in Computer Science is from
            UC Irvine. In addition I hold a Full Stack JavaScript Developer
            Nanodegree certification through{" "}
            <a
              href="https://www.udacity.com/course/full-stack-javascript-developer-nanodegree--nd0067"
              target="_"
            >
              Udacity
            </a>
            . My skills also include React, Responsive Design, and UI Design. So
            thank you for stopping by! Catch me being active on{" "}
            <a href="https://www.linkedin.com/in/curtisbabin/" target="_">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
