import React from "react"
import Scaffolding from "../components/Scaffolding"
import Head from "../components/Head"
import SampleEmail from "../components/sample-email"

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
