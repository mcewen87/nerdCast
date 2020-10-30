import React, { useState, useLayoutEffect } from "react"
import { Link } from "gatsby"
import Blog from "../components/blogCard"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Spinner from "../components/spinner"
import "../styles/main.css"
import banner from "../images/nerdyBanner.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"
import blog from "../images/typewriter.png"
import Sponsors from "../components/sponsors"

const IndexPage = () => {
  return (
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
        <div className="slideOne">
          <div className="content">
            <h1 className="whiteHeader">Latest Blog Posts</h1>
            <div className="gridThree">
              <Blog />
              <Blog />
              <Blog />
            </div>
          </div>
        </div>
        <div className="slideThree">
          <div className="content">
            <h1 className="discord">Click Here to Join or Discord Server</h1>
            <p className="discordFeatures">Community Q & A's</p>
            <p className="discordFeatures">Multiple Channels</p>
            <p className="discordFeatures">Exclusive Content and Giveaways</p>
            <p className="discordFeatures">Center of the Nerd-Verse</p>
          </div>
        </div>
        <Sponsors />
      </div>
    </>
  )
}

export default IndexPage
