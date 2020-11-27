import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import style from "./styles/header.module.css"
import logo from "../images/nerdyLogo.png"
import { bubble as Menu } from "react-burger-menu"

const Header = props => (
  <header className={style.background}>
    <Menu {...props}>
      <a
        className={style.link}
        target="_blank"
        href="https://holynerdypodcast.podbean.com/"
      >
        Episodes
      </a>

      <Link className={style.link} to="/">
        Blog (Coming Soon!)
      </Link>

      <Link className={style.link} to="/">
        Merch (Coming Soon!)
      </Link>

      <Link className={style.link} to="/contact">
        Contact
      </Link>
    </Menu>
    <Link to="/">
      <img src={logo} className={style.logo} />
    </Link>
  </header>
)

export default Header
