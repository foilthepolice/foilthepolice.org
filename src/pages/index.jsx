import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import React, { Fragment, useState } from 'react';

import { COLORS, HREFS, STATES } from '../constants';
import TRANSPARENCY_LAWS from '../../data/transparencyLaws';
import { stringsToGoogleSearchQ } from '../utils';

import Scaffolding from '../components/Scaffolding';
import { Button } from '../components/Buttons';
import { Input, Select } from '../components/Inputs';
import { A, H1, H2, H3, P, Small } from '../components/Typography';
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
    padding: 1em 0 0.25em;
  }
  h2, h3 {
    padding: 0.5em 0;
  }
  & > div {
    padding: 1em 0;
  }
`;

const InputRowForm = styled.form`
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

function getStateTemplateCounts(data) {
  return Object.keys(STATES).reduce((counts, st) => ({
    ...counts,
    [st]: data.allMarkdownRemark.edges
      .filter(({ node }) => node.frontmatter.state === st)
      .length
  }), {});
}

const IndexPage = ({ location }) => {
  const params =  new URLSearchParams(location.search)
  const [hometownIn, setHometownIn] = useState('')
  const [stateIn, setStateIn] = useState(params.get('state') || '')
  const [requestSent, setRequestSent] = useState(false)
  const stateTemplateData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              state
            }
          }
        }
      }
    }
  `);
  const stateTemplateCounts = getStateTemplateCounts(stateTemplateData);
  const transparencyLaw = TRANSPARENCY_LAWS.find(tl => tl.state === stateIn)

  return (
    <Scaffolding>
      <IndexSection>
        <H1>F.O.I.L. The Police</H1>
        <H3>Uncover violent police officers in your town by sending a<br /><A href="#make-a-police-record-request">Freedom of Information</A> request e-mail to your local government.</H3>
        <P>
          Local governments are required to respond to any FOI request for records you send.
          These requests have <A href="https://www.cjr.org/united_states_project/brandon_smith_chicago_police_laquan_mcdonald.php" target="_blank">released police body cam videos</A>, <A href="https://theintercept.com/2015/08/18/undercover-police-spied-on-ny-black-lives-matter/" target="_blank">revealed police tracking of activists</A>, and <A href="http://force.nj.com/" target="_blank">uncovered use of force by officers</A>.
          It's your right and duty to monitor your local police.
        </P>
        <P>
          <A href="#make-a-police-record-request">Use this crowd sourced tool to make your request</A>:
        </P>
      </IndexSection>

      <IndexSection>
        <H2 id="make-a-police-record-request">Get Police Records:</H2>
        <div>
          <H3>1. Select your state:</H3>
          <Select size="lg" value={stateIn} onChange={ev => setStateIn(ev.target.value)}>
            <option value="">----</option>
            {Object.keys(STATES).map(key => (
                <option key={key} value={key}>{STATES[key]}</option>
            ))}
          </Select>
          <P>
            {(stateIn && transparencyLaw) && <Small><i>Your state's transparency law: <A href={transparencyLaw.mrGuideUrl} target="_blank">{transparencyLaw.name}</A> ("{transparencyLaw.abbr}")</i></Small>}
          </P>
        </div>

        {/* State Selected & Templates Available */}
        {(stateIn && stateTemplateCounts[stateIn] > 0) && (
          <Fragment>
            <div>
              <H3>2. Find your local gov clerk's submission email, webpage, or pdf:</H3>
              <P>
                Depending on your community, a {transparencyLaw.abbr} submission may be done by email, website form, or PDF.
                Enter your town/city and we'll prep a Google search for you to easily find the email or pdf you need.
              </P>
              <InputRowForm onSubmit={(e) => {
                e.preventDefault();
                if (typeof window !== undefined) window.open(`https://google.com/search?q=${stringsToGoogleSearchQ([`"${hometownIn}"`, transparencyLaw.name, 'request form'])}`)
              }}>
                <Input
                  type="text"
                  size="lg"
                  value={hometownIn}
                  placeholder="Enter your town's name" onChange={ev => setHometownIn(ev.target.value)}
                />
                <Button
                  type="submit"
                  color="white"
                >
                  <b>Search&nbsp;[⬈]</b>
                </Button>
              </InputRowForm>
              <P>
                <Small>
                  <i>
                    Searching: google.com/search?q={stringsToGoogleSearchQ([`"${hometownIn}"`, transparencyLaw.name, 'request form']).replace(/"/g, '')}
                  </i>
                </Small>
              </P>
            </div>
            <div>
              <H3>3. Choose a record request template to send:</H3>
              <P>
                Below are record request templates informed by journalists and lawyers in {STATES[stateIn]} to get the best response from your local gov.
                You just need to copy, fill in your name, and send!
              </P>
              <P>
                We recommend first looking at use of force reports or police union contracts.
                Use of force reports can reveal officers who use force more often on people of color.
                Police union contracts can have qualified immunity clauses that allow them to avoid being held accountable when deadly force is used.
              </P>
              <EmailTemplateList state={stateIn}/>
              <P>
                <Small><i>Are you a lawyer or journalist that can add templates? Please reach out to <A href={HREFS.MAIL_TO}>contact@foilthepolice.org</A></i></Small>
              </P>
            </div>
            <div>
              <H3>4. Send in your {transparencyLaw.abbr} request:</H3>
              <P>
                After inserting your contact info into a template above, you are ready to submit your {transparencyLaw.abbr} request!
                You should feel proud and calm. You've taken an important step in holding the institutions we've entrusted with power accountable.
                When you submit your request, you will have joined journalists, lawyers, and activists across the country doing this work.
              </P>
              <Button color="white" size="xl" disabled={requestSent} onClick={() => setRequestSent(true)}>
                {!requestSent ? <b>I've Submitted My Record Request</b> : <b>✊🏿✊🏾✊🏽✊🏼✊🏻</b>}
              </Button>
            </div>

            {requestSent && (
              <div>
                <H2>Now that it's sent:</H2>
                <P>
                  Each state and department are different in terms of response time.
                  <b>
                    {transparencyLaw.responseWithinDays
                      ? `${STATES[stateIn]} requires local government clerks to send you a response within ${transparencyLaw.responseWithinDays} business days.`
                      : 'Unfortunately, your state does not force your local government to respond within some number of business days.'}
                    </b>
                  &ensp;
                  If they are not able to fulfill your request within {transparencyLaw.responseWithinDays ? 'that deadline' : 'a reasonable time span'} you should expect to be notified.
                </P>
                <P>We hope your request is successful and you feel confident to do more. Should you receive records, we are compiling and tagging records people receive to make them easily searchable to journalists, lawyers, and activists. Please send us your city/state, request text, their response text, and any records attached to: <A href={HREFS.MAIL_TO}>contact@foilthepolice.org</A></P>
                <P>
                  If you have any feedback or ideas about where this project can go, <A href={HREFS.README}>join in and help out</A> or write us at <A href={HREFS.MAIL_TO}>contact@foilthepolice.org</A>
                </P>
              </div>
            )}
          </Fragment>
        )}

        {/* State Selected & No Templates Available */}
        {(stateIn && stateTemplateCounts[stateIn] === 0) && (
          <div>
            <H3>2. Choose Records to Request:</H3>
            <H2>We have not yet added templates for {STATES[stateIn]}.</H2>
            <P>
              When they are available, all you will need to do is copy them, fill in your info, and send them to your local government.
            </P>
            <H3><A href={HREFS.README} target="_blank">Want to help add templates for {stateIn.toUpperCase()}? Join our request team.</A></H3>
          </div>
        )}
      </IndexSection>
    </Scaffolding>
  )
}

export default IndexPage;
