import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import style from "./styles/layout.module.css"
import Spinner from "./spinner"

const Layout = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
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

  if (isLoaded) {
    return (
      <div id="App">
        <Header
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
          siteTitle={data.site.siteMetadata.title}
        />

        <main id="page-wrap">{children}</main>
        <footer></footer>
      </div>
    )
  } else {
    return <Spinner />
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
