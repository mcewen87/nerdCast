import React from "react"
import style from "./styles/sponsors.module.css"
import "../styles/main.css"
import robotFriday from "../images/robotFriday.jpg"

const Sponsors = props => {
  return (
    <div className="slideTwo">
      <div className="content">
        <h1 className="blackHeader">Our Sponsors</h1>
        <div className="gridThree">
          <a target="_blank" href="https://www.facebook.com/RobotFriday/">
            <div className={style.card}>
              <img src={robotFriday} className={style.sponsor} />
              <h3 className={style.name}>Robot Friday</h3>
            </div>
          </a>
          <a target="_blank" href="https://www.facebook.com/RobotFriday/">
            <div className={style.card}>
              <img src={robotFriday} className={style.sponsor} />
              <h3 className={style.name}>Robot Friday</h3>
            </div>
          </a>
          <a target="_blank" href="https://www.facebook.com/RobotFriday/">
            <div className={style.card}>
              <img src={robotFriday} className={style.sponsor} />
              <h3 className={style.name}>Robot Friday</h3>
            </div>
          </a>
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            textAlign: "center",
          }}
        >
          We love promoting fellow creators and small businesses. Contact
          holynerdypodcast@gmail.com to learn about becoming a sponsor of the
          show.
        </p>
      </div>
    </div>
  )
}

export default Sponsors
