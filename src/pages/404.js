import * as React from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "gatsby";
import "../styles/layout.css";
import "../styles/404.css";

const NotFoundPage = () => {
  return (
    <PageLayout pageTitle="404 Error">
      <h1 className="error">404 Error</h1>
      <h2>Page not found.</h2>
      <Link to="/" className="link link-404">
        Return home
      </Link>
    </PageLayout>
  );
};

export default NotFoundPage;
