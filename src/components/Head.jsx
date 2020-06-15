import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Favicon from '../../static/favicon.png';

const Head = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>FTP</title>
      <link rel="icon" type="image/png" href={Favicon} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
}

Head.propTypes = {
  siteTitle: PropTypes.string,
}

Head.defaultProps = {
  siteTitle: ``,
}

export default Head