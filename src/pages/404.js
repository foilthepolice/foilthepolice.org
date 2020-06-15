import React from "react"

import Scaffolding from "../components/layout/scaffolding"
import Head from "../components/layout/head"

const NotFoundPage = () => (
  <Scaffolding>
    <Head title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Scaffolding>
)

export default NotFoundPage
