import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { H2 } from './Typography';
import EmailTemplate from "./EmailTemplate"

const EmailTemplateListWrapper = styled.div`
  & > div {
    margin-bottom: 1em;
  }
`;

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
              goal
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)

  const emailTemplates = data
    .allMarkdownRemark.edges.map( edge => edge.node)
    .filter( node => node.frontmatter.state === state )

  if (emailTemplates.length > 0) {
    return (
      <EmailTemplateListWrapper>
        {emailTemplates.map( template => (
          <EmailTemplate
            key={template.id}
            title={template.frontmatter.title}
            goal={template.frontmatter.goal}
            requestHtml={template.html}
            requestMarkdown={template.rawMarkdownBody}
          />)
        )}
      </EmailTemplateListWrapper>
    )
  } else {
    /* TODO(nsahler): Actually write copy for this */
    return (
      <Fragment>
        <H2>No record templates for this state.<br />Please check back soon.</H2>
      </Fragment>
    );
  }
}

EmailTemplateList.propTypes = {
  state: PropTypes.string
}

EmailTemplateList.defaultProps = {
  state: null,
}

export default EmailTemplateList
