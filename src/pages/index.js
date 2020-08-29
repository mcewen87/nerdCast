import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/main.css"
import banner from "../images/nerdyBanner.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="container">
      <div className="hero">
        <h1 className="jumbo">A Podcast for the Nerd Masses</h1>

        <Link to="episodes">
          <h3 className="episodes"> View Episodes 🍑🍆💦👀</h3>
        </Link>
        <img src={banner} className="banner" />
      </div>
      <div className="slideOne"></div>
    </div>
  </>
)

export default IndexPage
