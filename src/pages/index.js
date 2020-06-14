import React, { Fragment, useState } from "react"

import STATES from '../components/states';
import TRANSPARENCY_LAWS from '../components/transparencyLaws';
import Scaffolding from "../components/scaffolding"
import Head from "../components/head"
import SampleEmail from "../components/sample-email"

const IndexPage = () => {
  const [stateIn, setStateIn] = useState(null);
  const [requestSent, setRequestSent] = useState(false);
  const transparencyLaw = TRANSPARENCY_LAWS.find(tl => tl.state === stateIn);

  console.log(stateIn)
  console.log(transparencyLaw)

  return (
    <Scaffolding>
      <Head title="Home"/>
      <div>
        <h1 style={{ textTransform: 'uppercase' }}>FOIL The Police</h1>
        <p>
          Freedom of Information (FOI) requests are a tool everyone has to uncover police department lies and violent officers. E-mail your local government clerk with a request template below and see what you uncover.
        </p>
        <p>
          FOI requests are what released police body cam videos of Laquan McDonald’s murder, uncovered the NYPD’s monitoring of Black Lives Matter activists, revealed NJ officers using force at significantly higher rates than their department, and more.
        </p>
        <p>
          A records request to uncover violent officers can be as simple as:
        </p>
        <div>
          <p>
            <b>
              To Whom It May Concern:

              I request all disciplinary reports for [INSERT YOUR POLICE DEPARTMENT] officers made during the past 6 years.
            </b>
          </p>
        </div>
      </div>
      <hr />
      <div>
        <h1>Make Your Record Request</h1>
        <div>
          <h2>1. What state do you live in?</h2>
          <select onChange={ev => setStateIn(ev.target.value)}>
            <option>----</option>
            {Object.keys(STATES).map((st) => (
              <option key={st} value={st}>{STATES[st]}</option>
            ))}
          </select>
          <br />
          {(stateIn && transparencyLaw) && <small>FYI: The transparency law in {STATES[stateIn]} is {transparencyLaw.name} ("{transparencyLaw.abbr}")</small>}
        </div>
        {stateIn && (
          <Fragment>
            <div>
              <h2>2. Copy (Ctrl+C) a Record Request to Send</h2>
              <p>In the templates below, we’ve included common phrases that journalists and lawyers use to get faster responses. You just need to copy, fill in your name, and send!</p>
              <SampleEmail sample=""/>
            </div>
            <div>
              <h2>3. Send to your local government clerk!</h2>
              <p>All that’s left is to find out where to e-mail your request to. Let’s search for your clerk’s e-mail:</p>
              <small>FYI: Your town may ask you to submit through a webpage or insert the text into PDF form. Depending on how many pages you request, the clerk may have a $1~10 fee.</small>
              <button onClick={() => setRequestSent(true)}>I've Submitted My Record Request</button>
            </div>
          </Fragment>
        )}
      </div>
      {requestSent && (
        <Fragment>
          <hr />
          <h1>After Your Request is Sent</h1>
          <p>Congrats on sending your request!!! You’ve now used a tool that journalists and lawyers around the country use to bring individuals, families, and communities justice! You should be proud, and we hope you continue to dig and hold your local police department accountable.</p>
          <p>We are compiling and tagging records people receive to make them easily searchable to journalists, lawyers, and activists. Please send us your city/state, request text, their response text, and any records attached to: contact@foilthepolice.org</p>
        </Fragment>
      )}
    </Scaffolding>
  )
}

export default IndexPage;
