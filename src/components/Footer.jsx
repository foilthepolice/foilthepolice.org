import React from 'react';
import styled from 'styled-components';
import { A, H4 } from './Typography';

const FooterWrapper = styled.div`
  padding: 4em 2em;
  main {
    max-width: 720px;
    margin: 0 auto;
    @media(max-width: 45em) {
      width: 100%;
    }
  }
`;

const Footer = ({ children }) => {
  return (
    <FooterWrapper>
      <H4>No Justice. No Peace.</H4>
      <A href="mailto:contact@foilthepolice.org">contact@foilthepolice.org</A>
    </FooterWrapper>
  )
}

export default Footer;
