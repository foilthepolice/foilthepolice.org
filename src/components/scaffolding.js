import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Scaffolding = ({ children }) => {
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
