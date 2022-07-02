import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import "../global styles/layout.css";

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

      <footer className="layoutFooter footer">
        <a
          href="https://www.termsfeed.com/live/3fbd4032-b635-4816-a90d-ed310ec9d468"
          target="_"
          style={{"transition": ".25s ease-in-out"}}
        >
          Privacy Policy | {new Date().getFullYear()}
        </a>
      </footer>
    </>
  );
};

export default Layout;
