import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { COLORS } from "../constants"
import { useStaticQuery, graphql } from "gatsby"
import EmailTemplate from "./EmailTemplate"

const EmailTemplateList = ({ state }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              state
              title
            }
          }
        }
      }
    }
  `)

  const emailTemplates = data
    .allMarkdownRemark.edges.map( edge => edge.node)
    .filter( node => node.frontmatter.state == state )

  if (emailTemplates.length > 0) {
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
        { emailTemplates.map( template => (
          <EmailTemplate 
            key={template.id}
            title={template.frontmatter.title}
            body={template.html}
          />)
        )}
      </div>
    )
  } else {
    /* TODO(nsahler): Actually write copy for this */
    return (<h2>No Templates for This State</h2>)
  }
}

EmailTemplateList.propTypes = {
  state: PropTypes.string
}

EmailTemplateList.defaultProps = {
  state: null,
}

export default EmailTemplateList
