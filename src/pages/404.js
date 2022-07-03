import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import "../styles/layout.css";
import "../styles/404.css";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <h1 className="layoutPadding title">404 Error</h1>
      <h2 className="layoutPadding">This page doesn't exist!</h2>
      <Link to="/" className="layoutPadding home">
        Home
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
