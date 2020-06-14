import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import COLORS from "../colors"

const Header = ({ siteTitle, toggleable }) => {
  let [ showContent, setShowContent ] = useState(!toggleable)
  console.log(typeof toggleable)
  return (
    <div
      style={{
        border: '1px solid',
        borderColor: COLORS.dark,
        margin: '0 auto',
        marginBottom: '45px',
        maxWidth: 960
      }}
    >
      { toggleable ? (
        <div
          style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            borderBottom: '1px solid',
            borderColor: COLORS.dark,
            marginBottom: '-1px',
            padding: '30px',
          }}
        > 
          <h2
            style={{
              flex: '1'
            }}
          >Example Email Title Here</h2>
          <button 
            style={{
              background: 'none',
              border: '1px solid',
              borderColor: COLORS.dark,
              padding: '13px 20px',
              minWidth: '100px',
              cursor: 'pointer'
            }}
            onClick={() => setShowContent(!showContent)}>
            { showContent ? 'HIDE': 'SHOW' }
          </button>
        </div>
      ) : ''}
      { showContent ? (
        <div style={{ padding: '30px' }}>
          {/* TODO(nsahler): DO SAMPLE LOADING */}
          To Whom It May Concern:<br/>
          I request any records of disciplinary actions taken against [INSERT YOUR POLICE DEPARTMENT] officers during the past 6 years.
        </div>
      ) : '' }
    </div>
  )
}

Header.propTypes = {
  sampleId: PropTypes.string,
  toggleable: PropTypes.bool
}

Header.defaultProps = {
  sampleId: '',
  toggleable: true
}

export default Header
