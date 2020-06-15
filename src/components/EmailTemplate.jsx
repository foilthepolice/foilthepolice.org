import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { COLORS } from "../constants"

const EmailTemplate = ({ siteTitle, toggleable, title, body }) => {
  let [ showContent, setShowContent ] = useState(!toggleable)
  return (
    <div
      style={{
        border: '1px solid',
        borderColor: COLORS.BLACK[500],
        margin: '0 auto',
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
            borderColor: COLORS.BLACK[500],
            marginBottom: '-1px',
            padding: '30px',
          }}
        >
          <h2
            style={{
              flex: '1'
            }}
          >{title}</h2>
          <button
            style={{
              background: 'none',
              border: '1px solid',
              borderColor: COLORS.BLACK[500],
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
        <div style={{ padding: '30px' }}  dangerouslySetInnerHTML={{ __html: body}}>
        </div>
      ) : '' }
    </div>
  )
}

EmailTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  toggleable: PropTypes.bool
}

EmailTemplate.defaultProps = {
  title: '',
  body: '',
  toggleable: true
}

export default EmailTemplate
