import styled, { css } from 'styled-components';
import { COLORS } from '../constants';

export const ButtonCSS = css`
  box-sizing: border-box;
  background: blue;
  border: 1px solid blue;
  border-bottom: 3px solid blue;
  color: ${COLORS.WHITE[900]};
  path {
    fill: ${COLORS.WHITE[900]};
  }
  border-radius: 4px;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  transition: 0.1s color;
  cursor: pointer;
  svg {
    position: relative;
    top: 2px;
    right: 3px;
    max-height: 18px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    if (props.disabled) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }
  }}
  ${(props) => {
    if (props.size === 'xs') {
      return `
        padding: .3em .6em;
        font-size: 0.8em;
        svg {
          height: 0.8em;
          width: 0.8em;
        }
      `;
    }
    if (props.size === 'sm') {
      return `
        padding: 0.5em 1em;
        font-size: 0.8em;
        svg {
          height: 0.8em;
          width: 0.8em;
        }
      `;
    }
    if (props.size === 'md' || !props.size) {
      return `
        padding: 0.6em 1.2em;
        font-size: 1em;
        svg {
          height: 1em;
          width: 1em;
        }
      `;
    }
    if (props.size === 'lg') {
      return `
        padding: 0.8em 1.4em;
        font-size: 1.4em;
        svg {
          height: 1.2em;
          width: 1.2em;
          margin-left: 0.5em;
        }
      `;
    }
    if (props.size === 'xl') {
      return `
        width: 100%;
        padding: 1em 2em;
        font-size: 1.6em;
        text-align: center;
        svg {
          height: 1.2em;
          width: 1.2em;
          margin: 0 0.25em;
        }
      `;
    }
    return `
      padding: 0.6em 1.2em;
      font-size: 1.1em;
    `;
  }}
`;

export const Button = styled.button`
  ${ButtonCSS}
`;

export const ButtonLink = styled.a`
  ${ButtonCSS}
`;
