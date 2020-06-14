import React from "react"
import { Link } from "gatsby"

import Scaffolding from "../components/scaffolding"
import Image from "../components/image"
import Head from "../components/head"
import SampleEmail from "../components/sample-email"

import index from '../components/index.css'

const Jurisdiction = ({ pageContext }) => {
  return (
  <Scaffolding>
    <Head title="Home"/>
    <h1 style={{ textTransform: 'uppercase' }}>FOIL {pageContext.title}</h1>
    <p>
      {pageContext.example}
    </p>
    <SampleEmail sample=""/>
  </Scaffolding>
)}

export default Jurisdiction
