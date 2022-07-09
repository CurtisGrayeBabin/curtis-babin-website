import * as React from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "gatsby";
import "../styles/layout.css";
import "../styles/404.css";

const NotFoundPage = () => {
  return (
    <PageLayout pageTitle="404">
      <h1>Whoo-hoo 404 Error! Yay!</h1>
      <h2>Yeah, this page doesn't exist. Feel free to go home (which does exist):</h2>
      <Link to="/">
        Go Home
      </Link>
    </PageLayout>
  );
};

export default NotFoundPage;
