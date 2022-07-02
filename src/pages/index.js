import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Curtis Babin | Web Developer">

    <div>
      <StaticImage src="../images/github profile.png" alt="My picture" width={300} height={300} imgStyle={{ borderRadius: '100%' }} />
    </div>

    </Layout>
  );
};

export default IndexPage;
