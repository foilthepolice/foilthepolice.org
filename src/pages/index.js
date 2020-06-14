import React from "react"
import { Link } from "gatsby"

import Scaffolding from "../components/scaffolding"
import Image from "../components/image"
import Head from "../components/head"
import SampleEmail from "../components/sample-email"

import index from '../components/index.css'

const IndexPage = () => (
  <Scaffolding>
    <Head title="Home"/>
    <h1 style={{ textTransform: 'uppercase' }}>FOIL The Police</h1>
    <p>
      Freedom of Information (FOI) requests are a tool every citizen has to keep local police departments in check and
      they can be as simple as a few sentences in an email. This website helps your first open record request.<br/><br/>
      These requests have released police body cam videos of Laquan McDonald’s murder to the public, uncovered the
      NYPD’s monitoring of Black Lives Matter activists, and revealed officers across New Jersey who used force at
      significantly higher rates than others in their department. Here’s an example of how simple they can be:
    </p>
    <SampleEmail sample="" toggleable={false}/>
    <p>
      It’s your right to request this information and it’s your duty to put a spot light on your local police
      department and officers behaviors. Records you request can tip off journalists, lawyers, and activists
      across your state and help them drive change.
    </p>
    <h1 id="send-request">Send a Request to Your Police Dept.</h1>
    <p>
      Below we’ve provided state-by-state templates you can e-mail to your local clerk for use of force reports,
      disciplinary reports, department performance metrics, citizen complaints and more. <br/>
      Upload any records you receive to help journalists, lawyers, and activists in their work.
    </p>
    <SampleEmail sample=""/>
  </Scaffolding>
)

export default IndexPage
