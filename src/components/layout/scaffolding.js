import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Scaffolding = ({ children }) => {
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
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `125px 0`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Scaffolding.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Scaffolding
