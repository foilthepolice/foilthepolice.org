import React from 'react';
import styled from 'styled';

import Scaffolding from '../components/Scaffolding'
import { A, H1, P } from '../components/Typography';

const ErrorSection = styled.div`
  padding-bottom: 2em;
  margin-bottom: 2em;
  &:last-of-type {
    margin-bottom: 6em;
  }
  h1 {
    padding: 1em 0;
  }
`;

const NotFoundPage = () => (
  <Scaffolding>
    <ErrorSection>
      <H1>F.O.I.L. The Police</H1>
      <P>
        There doesn't seem to be a page here. <A href="/">Go to homepage</A>
      </P>
    </ErrorSection>
  </Scaffolding>
)

export default NotFoundPage
