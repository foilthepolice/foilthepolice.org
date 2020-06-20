import React from 'react';
import styled from 'styled-components';

import { COLORS, HREFS } from '../constants';
import { A, H3, P } from './Typography';

const FooterWrapper = styled.div`
  padding: 2em;
  text-align: center;
  opacity: 0.4;
  color: ${COLORS.WHITE[500]};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <H3>No Justice, No Peace.</H3>
      <P>This site started when 3 neighbors in a small town (3000 pop.) set out to hold their local police accountable.</P>
      <P><A href={HREFS.README} target="_blank">Consider joining a team to help this project grow.</A></P>
      <small><A href={HREFS.MAIL_TO}>contact@foilthepolice.org</A></small>
    </FooterWrapper>
  )
}

export default Footer;
