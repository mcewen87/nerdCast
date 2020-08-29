import React from "react"
import style from "./styles/spinner.module.css"
import logo from "../images/nerdyLogo.png"

const Spinner = props => {
  return (
    <div className={style.container}>
      <img src={logo} className={style.spinner} />
    </div>
  )
}

export default Spinner
