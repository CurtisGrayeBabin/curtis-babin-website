import * as React from "react";
import Layout from "../components/layout";
import { increase, contact, border } from "./index.module.css";
import { layoutPadding } from "../global styles/layout.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Curtis Babin | Web Developer">
      <section className={`${layoutPadding} ${border}`}>
        <h1 className={increase}>
          Grow your business with a fast, mobile, modern, & SEO-focussed website
        </h1>
        <h2 className={contact}>Contact me below for more details</h2>
      </section>
    </Layout>
  );
};

export default IndexPage;
