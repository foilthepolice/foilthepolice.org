import styled, { css } from 'styled-components';

export const InputCSS = css`
  width: 100%;
  outline: none;
  padding: .8em 1em;
  border: 1px solid #FAFAFA;
  border-bottom: 2px solid #F0F0F0;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  ${props => {
    if (props.size === 'xs') {
      return `
        padding: .8em .5em;
        font-size: .8em;
      `;
    } else if (props.size === 'sm') {
      return `
        padding: .8em .5em;
        font-size: .8em;
      `;
    } else if (props.size === 'md' || !props.size) {
      return `
        padding: .8em .5em;
        font-size: 1em;
      `;
    } else if (props.size === 'lg') {
      return `
        padding: .8em;
        font-size: 1.2em;
      `;
    } else if (props.size === 'xl') {
      return `
        width: 100%;
        padding: .8em .5em;
        font-size: 1.6em;
        text-align: center;
      `;
    }
    return `
      padding: .8em .5em;
      font-size: 1.1em;
    `;
  }}
`;

export const Input = styled.input`
  ${InputCSS}
`;

export const Select = styled.select`
  ${InputCSS}
`;
