import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Head from './Head';
import Footer from './Footer';

const ScaffoldingWrapper = styled.div`
  padding: 4em 2em;
  main {
    max-width: 720px;
    margin: 0 auto;
    @media(max-width: 45em) {
      width: 100%;
    }
  }
`;

const Scaffolding = ({ children }) => {
  return (
    <ScaffoldingWrapper>
      <GlobalStyle />
      <Head />
      <main>{children}</main>
      <Footer />
    </ScaffoldingWrapper>
  )
}

Scaffolding.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Scaffolding
