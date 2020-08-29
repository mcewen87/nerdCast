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
      <Link className={style.link} to="/">
        Episodes
      </Link>

      <Link className={style.link} to="/">
        Blog
      </Link>

      <Link className={style.link} to="/">
        Merch
      </Link>

      <Link className={style.link} to="/">
        Contact
      </Link>
    </Menu>
    <img src={logo} className={style.logo} />
  </header>
)

export default Header
