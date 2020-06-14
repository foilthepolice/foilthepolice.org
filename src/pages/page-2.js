import React from "react"
import { Link } from "gatsby"

import Scaffolding from "../components/scaffolding"
import Head from "../components/head"

const SecondPage = () => (
  <Scaffolding>
    <Head title="Home"/>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Scaffolding>
)

export default SecondPage
