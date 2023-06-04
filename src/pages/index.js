import * as React from "react"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.scss"

const links = [
  {text: "About", url: "/About", local: 1},
  {text: "Blog", url: "/Blog", local: 1},
  {text: "GitHub", url: "https://github.com/CurtisGrayeBabin"},
  {text: "LinkedIn", url: "https://www.linkedin.com/in/curtisbabin/"},
  {text: "Music", url: "/Music", local: 1},
  {text: "Works", url: "/Works", local: 1}
]

const IndexPage = () => (
  <Layout>
    <header>
      <h1>Curtis Babin</h1>
      <h2>Web Developer.</h2>
    </header>
    <ul>
      {
        links.map(o => 
          <li key={o.text}>{(o.local === 1 ? <Link to={o.url}>{o.text}</Link> : <a href={o.url} target="_blank" rel="noreferrer">{o.text}</a>)}</li>
        )
      }
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
