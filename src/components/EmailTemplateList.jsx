import { flatten, startCase } from 'lodash';
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'

import { H2 } from './Typography';
import { Button } from '../components/Buttons';
import EmailTemplate from './EmailTemplate'

const EmailTemplateListWrapper = styled.div`
  margin: 1.5em 0;
  & > div {
    margin-bottom: 1em;
  }
`;

const TemplateSelectionButtons = styled.div`
  margin: 0.75em 0;
  display: inline;
  button {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const EmailTemplateList = ({ state }) => {
  const data = useStaticQuery(graphql`
    query {
      templates: allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              state
              title
              goal
              categories
              request
            }
          }
        }
      }
    }
  `)

  const emailTemplates = data
    .templates.edges.map(edge => edge.node)
    .filter((node) => node.frontmatter.state === state);
  const categories = Array.from(new Set(flatten(
    data.templates.edges.map(({ node }) => node.frontmatter.categories)
  ))).filter((c) => c != null).sort().reverse();
  const [filterCategory, setFilterCategory] = useState('beginners');

  if (emailTemplates.length > 0) {
    return (
      <Fragment>
        <TemplateSelectionButtons>
          {categories.sort().map((category) => (
            <Button
              size="sm"
              color="white"
              inverted={filterCategory !== category}
              onClick={() => setFilterCategory(category)}
            >
              {startCase(category)}
            </Button>
          ))}
          <Button
            size="sm"
            color="white"
            inverted={filterCategory}
            onClick={() => setFilterCategory(null)}
          >
            All Templates
          </Button>
        </TemplateSelectionButtons>
        <EmailTemplateListWrapper>
          {emailTemplates
            .filter((template) => !filterCategory || (template.frontmatter.categories || []).includes(filterCategory))
            .map(template => (
              <EmailTemplate
                key={template.id}
                title={template.frontmatter.title}
                goal={template.frontmatter.goal}
                request={template.frontmatter.request}
              />)
          )}
        </EmailTemplateListWrapper>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <H2>No record request templates.</H2>
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
