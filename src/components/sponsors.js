import React from "react"
import style from "./styles/sponsors.module.css"
import "../styles/main.css"
import robotFriday from "../images/robotFriday.jpg"

const Sponsors = props => {
  return (
    <div className="slideThree">
      <div className="content">
        <h1 className="blackHeader">Our Sponsors</h1>
        <div className="gridThree">
          <div className={style.card}>
            <img src={robotFriday} className={style.sponsor} />
            <h3 className={style.name}>Robot Friday</h3>
          </div>
          <div className={style.card}>
            <img src={robotFriday} className={style.sponsor} />
            <h3 className={style.name}>Robot Friday</h3>
          </div>
          <div className={style.card}>
            <img src={robotFriday} className={style.sponsor} />
            <h3 className={style.name}>Robot Friday</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
