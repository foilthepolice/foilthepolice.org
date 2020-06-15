import styled from 'styled-components';
import React, { Fragment, useState } from 'react';

import { COLORS, STATES } from '../constants';
import TRANSPARENCY_LAWS from '../../data/transparencyLaws';
import { stringsToGoogleSearchQ } from '../utils';

import Scaffolding from '../components/Scaffolding';
import { Button, ButtonLink } from '../components/Buttons';
import { Input, Select } from '../components/Inputs';
import { A, H1, H2, H3, P } from '../components/Typography';
import EmailTemplateList from '../components/EmailTemplateList';

const IndexSection = styled.div`
  padding-bottom: 2em;
  margin-bottom: 2em;
  &:last-of-type {
    margin-bottom: 6em;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.BLUE[300]};
  }
  h1 {
    padding: 1.5em 0;
  }
  h2, h3 {
    padding: 0.5em 0 1em;
  }
  & > div {
    padding: 1em 0;
  }
`;

const InputRow = styled.div`
  display: flex;
  a {
    min-width: 160px;
  }
  @media(max-width: 45em) {
    flex-direction: column;
    a {
      margin: 0.5em 0;
    }
  }
`;

const RequestTemplatePlaceholder = styled.div`
  width: 100%;
  height: 120px;
  background: ${COLORS.BLUE[300]};
  opacity: 0.25;
  margin: 1.5em 0;
`;

const IndexPage = ({ location }) => {
  const params =  new URLSearchParams(location.search)

  const [hometownIn, setHometownIn] = useState('')
  const [stateIn, setStateIn] = useState(params.get('state'))
  const [requestSent, setRequestSent] = useState(false)
  const transparencyLaw = TRANSPARENCY_LAWS.find(tl => tl.state === stateIn)

  return (
    <Scaffolding>
      <IndexSection>
        <H1>F.O.I.L. The Police</H1>
        <P>
          Freedom of Information (FOI) requests are a tool you have to uncover police department lies, violent officers, and evidence of abuse. An e-mail to your local government is all it takes.
        </P>
        <P>
          FOI requests <A href="https://www.cjr.org/united_states_project/brandon_smith_chicago_police_laquan_mcdonald.php" target="_blank">released police body cam videos to the public</A>, <A href="https://theintercept.com/2015/08/18/undercover-police-spied-on-ny-black-lives-matter/" target="_blank">uncovered the NYPD’s monitoring of Black Lives Matter activists</A>, revealed <A href="http://force.nj.com/" target="_blank">NJ officers using force at significantly higher rates than their department</A>, and more.
        </P>
      </IndexSection>
      <IndexSection>
        <H2>Make a Police Record Request</H2>
        <div>
          <H3>1. Select Your State:</H3>
          <Select size="lg" value={stateIn} onChange={ev => setStateIn(ev.target.value)}>
            <option>----</option>
            {Object.keys(STATES).map((st) => (
              <option key={st} value={st}>{STATES[st]}</option>
            ))}
          </Select>
          <P>
            {(stateIn && transparencyLaw) && <small><i>Your state's transparency law: <A href={transparencyLaw.mrGuideUrl} target="_blank">{transparencyLaw.name}</A> ("{transparencyLaw.abbr}")</i></small>}
          </P>
        </div>
        {stateIn && (
          <Fragment>
            <div>
              <H3>2. Choose Records to Request:</H3>
              <P>Below are record request templates informed by journalists and lawyers. We've inserted language that lessen the chance of denial and get faster responses. You just need to copy, fill in your name, and send!</P>
              <EmailTemplateList state={stateIn}/>
              <P>
                <small><i>Are you a lawyer or journalist that can expand the template ideas? Please reach out to <A href="mailto:contact@foilthepolice.org">contact@foilthepolice.org</A></i></small>
              </P>
            </div>
            <div>
              <H3>3. Find Your Local Gov Clerk's Submission Page/Email:</H3>
              <P>To find the correct email or submission form, it's best to look on your local gov's website. Enter your town, click search, and we'll point you in the right direction:</P>
              <InputRow>
                <Input type="text" size="lg" value={hometownIn} placeholder="Enter your town's name" onChange={ev => setHometownIn(ev.target.value)} />
                <ButtonLink size="lg" href={`https://google.com/search?q=${stringsToGoogleSearchQ([hometownIn, transparencyLaw.name, 'submit'])}`} target="_blank">
                  <b>Search&nbsp;[⬈]</b>
                </ButtonLink>
              </InputRow>
              <P>
                <small><i>FYI: Your town may ask you to submit through a webpage or insert the text into PDF form. Depending on how many pages you request, the clerk may have a $1~10 fee.</i></small>
              </P>
            </div>
            <div>
              <Button size="xl" disabled={requestSent} onClick={() => setRequestSent(true)}>
                {!requestSent ? <b>I've Submitted My Record Request</b> : <b>Submitted</b>}
              </Button>
            </div>
          </Fragment>
        )}
      </IndexSection>
      {requestSent && (
        <IndexSection>
          <H2>Good Job! Now that it's sent:</H2>
          <P>Congrats on sending your request! You’ve now used a tool that journalists and lawyers around the country use to bring individuals, families, and communities justice. You should be proud, and we hope you continue to examine and hold your local police department accountable.</P>
          <P>Each state and department are different in terms of response time. <b>{transparencyLaw.responseWithinDays ? `Your state requires local government clerks to send you a response within ${transparencyLaw.responseWithinDays} business days.` : 'Unfortunately, your state does not force your local government to respond within some number of business days.'}</b></P>
          <P>We hope your request is successful and you feel confident to do more. Should you receive records, we are compiling and tagging records people receive to make them easily searchable to journalists, lawyers, and activists. Please send us your city/state, request text, their response text, and any records attached to: <A href="mailto:contact@foilthepolice.org">contact@foilthepolice.org</A></P>
        </IndexSection>
      )}
    </Scaffolding>
  )
}

export default IndexPage;
