import * as React from "react";
import Layout from "../components/layout";
import { layoutPadding } from "../global styles/layout.module.css";
import { title, home } from "./404.module.css";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <h1 className={`${layoutPadding} ${title}`}>404 Error</h1>
      <h2 className={layoutPadding}>This page doesn't exist!</h2>
      <Link to="/" className={`${layoutPadding} ${home}`}>
        Home
      </Link>
    </Layout>
  );
};

export default NotFoundPage;
