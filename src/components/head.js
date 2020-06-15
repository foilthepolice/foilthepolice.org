import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from "prop-types"

// import symbol from '../../static/symbol.png'

const Head = ({ siteTitle }) => (
  <Helmet>
    <title>FOIL The Police - {siteTitle}</title>
    {/*<link rel="icon" href={symbol} type="image/png" />*/}
  </Helmet>
)

Head.propTypes = {
  siteTitle: PropTypes.string,
}

Head.defaultProps = {
  siteTitle: ``,
}

export default Head