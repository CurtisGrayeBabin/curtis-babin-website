import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import "../styles/layout.css";
import "../styles/404.css";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <h1>Whoo-hoo 404 Error! Yay!</h1>
      <h2>Yeah, this page doesn't exist. Feel free to go home (which does exist):</h2>
      <Link to="/">
        Go Home
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
