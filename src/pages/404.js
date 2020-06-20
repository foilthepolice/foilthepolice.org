import React from "react"

import Scaffolding from "../components/Scaffolding"
import { A, H1, P } from '../components/Typography';

const NotFoundPage = () => (
  <Scaffolding>
    <IndexSection>
      <H1>F.O.I.L. The Police</H1>
      <P>
        There doesn't seem to be a page here. <A href="/">Go to homepage</A>
      </P>
    </IndexSection>
  </Scaffolding>
)

export default NotFoundPage
