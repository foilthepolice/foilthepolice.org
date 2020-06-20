import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';
import { A, H3, P } from './Typography';

const FooterWrapper = styled.div`
  padding: 2em;
  text-align: center;
  opacity: 0.4;
  color: ${COLORS.WHITE[500]};
`;

const Footer = ({ children }) => {
  return (
    <FooterWrapper>
      <H3>No Justice, No Peace.</H3>
      <P>This site started when 3 neighbors in a small town (3000 pop.) set out to hold their local police accountable.</P>
      <P>You have the power to investigate your local police. Please share your progress with us.</P>
      <small><A href="mailto:contact@foilthepolice.org">contact@foilthepolice.org</A></small>
    </FooterWrapper>
  )
}

export default Footer;
