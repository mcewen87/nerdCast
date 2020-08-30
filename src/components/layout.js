import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import style from "./styles/layout.module.css"
import Spinner from "./spinner"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false)

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 1200)
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="App">
      <Header
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        siteTitle={data.site.siteMetadata.title}
      />
      <main id="page-wrap">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
