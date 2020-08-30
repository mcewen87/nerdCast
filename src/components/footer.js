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
            <Link to="/episodes">Episodes</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/Contact">Contact</Link>
          </p>
          <FontAwesomeIcon className={style.icon} icon={faInstagram} />
          <FontAwesomeIcon className={style.icon} icon={faTwitter} />
          <FontAwesomeIcon className={style.icon} icon={faFacebook} />
          <p className={style.copyright}>Company Name &copy; 2015</p>
        </div>
        <div className={style.right}>
          <img src={logo} className={style.logo} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
