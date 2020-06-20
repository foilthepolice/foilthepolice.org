import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { COLORS } from '../constants';
import { H3, P } from './Typography';
import { Button } from '../components/Buttons';

const EmailTemplateWrapper = styled.div`
  background: ${COLORS.WHITE[800]};
  border-radius: 2px;
  border: 1px solid ${COLORS.WHITE[500]};
  border-bottom: 6px solid ${COLORS.WHITE[300]};
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    &:hover {
      cursor: pointer;
    }
    h3 {
      font-weight: 700;
      color: ${COLORS.BLACK[300]};
      padding: 0;
      text-decoration: underline;
    }
  }
  .goal {
    padding: 0.5em 1em;
    border-top: 1px solid ${COLORS.WHITE[500]};
    p {
      color: ${COLORS.BLACK[900]};
    }
  }
  .request-template {
    background: ${COLORS.WHITE[700]};
    border-top: 2px solid ${COLORS.WHITE[600]};
    padding: 1.5em 2.5em 2.5em;
    color: ${COLORS.BLACK[900]};
    font-size: 14px;
    font-family: Courier;
    line-height: 120%;
  }
`;

const CopyRequestButton = ({ requestText }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => setCopied(false), 2500);
  }, [copied])

  return (
    <Button color="black" size="sm" inverted disabled={copied} onClick={() => {
      setCopied(true);
      copy(requestText, { format: 'text/plain' });
    }}>
      {copied ? 'Copied!' : 'Copy Request to Clipboard'}
    </Button>
  );
}

const EmailTemplate = ({ goal, toggleable, request, title }) => {
  let [ showContent, setShowContent ] = useState(!toggleable)
  return (
    <EmailTemplateWrapper>
      <div className="header" onClick={() => {
        if (toggleable) setShowContent(!showContent)
      }}>
        <H3>{title}</H3>
        {toggleable && <Button color="black" size="sm" inverted>{showContent ? 'Hide': 'View'}</Button>}
      </div>
      {goal && (
        <div className="goal">
          <P><b>Why send this request:</b> {goal}</P>
        </div>
      )}
      {showContent && (
        <div className="request-template">
          <CopyRequestButton requestText={request} />
          <br />
          {request.split('\n').map(paragraph => <p>{paragraph}</p>)}
        </div>
      )}
    </EmailTemplateWrapper>
  )
}

EmailTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  toggleable: PropTypes.bool
}

EmailTemplate.defaultProps = {
  title: '',
  body: '',
  toggleable: true
}

export default EmailTemplate
