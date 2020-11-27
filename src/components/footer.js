import React from "react"
import style from "./styles/footer.module.css"
import logo from "../images/nerdyLogo.png"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"

const Footer = props => {
  return (
    <footer>
      <div className={style.footer}>
        <div className={style.left}>
          <p className={style.links}>
            <Link className={style.linkOne} to="/">
              Home
            </Link>
            <a target="_blank" href="https://holynerdypodcast.podbean.com/">
              Episodes
            </a>
            <Link to="/">Blog (Coming Soon!)</Link>
            <Link to="/contact">Contact</Link>
          </p>
          <a
            target="_blank"
            href="https://www.instagram.com/holynerdypod/?hl=en"
          >
            <FontAwesomeIcon className={style.icon} icon={faInstagram} />
          </a>
          <a target="_blank" href="https://twitter.com/holynerdypod?lang=en">
            <FontAwesomeIcon className={style.icon} icon={faTwitter} />
          </a>
          <a target="_blank" href="https://www.facebook.com/HolyNerdyPodcast">
            <FontAwesomeIcon className={style.icon} icon={faFacebook} />
          </a>
          <p className={style.copyright}>Holy Nerdy Podcast &copy; 2020</p>
        </div>
        <div className={style.right}>
          <Link to="/">
            <img src={logo} className={style.logo} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
