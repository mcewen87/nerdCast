import React from "react"
import style from "./styles/blogCard.module.css"
import Caleb from "../images/caleb.jpg"

const BlogCard = props => {
  return (
    <div className={style.card}>
      <div className={style.banner}>
        <h2 className={style.header}>Top Five Anime Babes</h2>
      </div>
      <div className={style.footer}>
        <img src={Caleb} className={style.author} />
        <p className={style.date}>Words by Caleb</p>
        <h4 className={style.tags}>#anime #topfive #cartoons #ranking</h4>
      </div>
    </div>
  )
}

export default BlogCard
