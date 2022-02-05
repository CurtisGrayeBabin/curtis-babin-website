import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";

// format of each page (not just Home page)
const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="The personal website of Curtis Babin: a web developer."
        />
        <link rel="canonical" href="https://www.curtisbabin.com" />
        <meta name="author" content="Curtis Babin"></meta>
        <link
          rel="manifest"
          crossorigin="use-credentials"
          href="/manifest.webmanifest"
        />
      </Helmet>

      <Navbar />

      <main>{children}</main>

      <footer></footer>
    </>
  );
};

export default Layout;
