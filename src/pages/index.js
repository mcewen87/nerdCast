import React, { useState, useLayoutEffect } from "react"
import { Link } from "gatsby"
import Blog from "../components/blogCard"
import News from "../components/featuredUpdate"
import SEO from "../components/seo"
import Spinner from "../components/spinner"
import "../styles/main.css"
import banner from "../images/nerdyBanner.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons"
import Sponsors from "../components/sponsors"
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import style from "../components/styles/footer.module.css"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="container">
        <div className="hero">
          <h1 className="jumbo">A Podcast for the Nerd Masses</h1>
          <a target="_blank" href="https://holynerdypodcast.podbean.com/">
            <h3 className="episodes"> View Episodes</h3>
          </a>
          <img src={banner} className="banner" />
        </div>
        <div className="slideOne">
          <div className="content">
            <h1 className="whiteHeader">
              Welcome To the Official Holy Nerdy Podcast Website
            </h1>
            <h2 className="red">The Rub</h2>
            <p className="white">
              The Holy Nerdy Podcast is an irreverent romp through all things
              nerd. Join life long friends, Chris and Caleb, on weekly
              explorations of comic books, movies, video games, television, pop
              culture, and the paranormal. With over 200 episodes, the Holy
              Nerdy Podcast delivers hours upon hours of streamable content.
            </p>
            <h2 className="red">The News</h2>

            <p className="white">
              With the addition of a website, we are excited to give our
              listeners another outlet to enjoy our media. In the near future,
              we plan on expanding our website's features to include a blog and
              online merchandise shop.
            </p>

            <h2 className="red">The Community</h2>
            <p className="white">
              Get involved in the Holy Nerdy Community by following us on
              Twitter, Facebook, and Instagram. You can also join our Discord
              server to chat with fellow nerds. Don't miss our exclusive
              giveaways and events.
            </p>
            <div className="row">
              <a
                target="_blank"
                href="https://www.instagram.com/holynerdypod/?hl=en"
              >
                <FontAwesomeIcon className={style.icon} icon={faInstagram} />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/holynerdypod?lang=en"
              >
                <FontAwesomeIcon className={style.icon} icon={faTwitter} />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/HolyNerdyPodcast"
              >
                <FontAwesomeIcon className={style.icon} icon={faFacebook} />
              </a>
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
