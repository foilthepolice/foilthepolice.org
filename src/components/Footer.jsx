import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';
import { A, H3 } from './Typography';

const FooterWrapper = styled.div`
  padding: 2em;
  text-align: center;
  opacity: 0.4;
  color: ${COLORS.WHITE[500]};
`;

const Footer = ({ children }) => {
  return (
    <FooterWrapper>
      <H3>No Justice. No Peace.</H3>
      <small><A href="mailto:contact@foilthepolice.org">contact@foilthepolice.org</A></small>
    </FooterWrapper>
  )
}

export default Footer;
