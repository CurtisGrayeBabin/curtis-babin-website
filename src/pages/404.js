import * as React from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <PageLayout pageTitle="404 | Page Not Found">
      <Link to="/" className="link transition-timing">
        <h1>404 Error: Page not found! Click this text to return home.</h1>
      </Link>
    </PageLayout>
  );
};

export default NotFoundPage;
