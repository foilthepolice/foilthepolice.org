import styled, { css } from 'styled-components';
import { COLORS } from '../constants';

export const TypographyCSS = css`
  color: ${COLORS.WHITE[900]};
  font-family: 'Akkurat', sans-serif;
  line-height: 135%;
  font-weight: 500;
`;

export const H1 = styled.h1`
  ${TypographyCSS}
  text-transform: uppercase;
  font-weight: 700;
  font-size: 54px;
`;

export const H2 = styled.h2`
  ${TypographyCSS}
  font-weight: 700;
  font-size: 36px;
`;

export const H3 = styled.h3`
  ${TypographyCSS}
  font-weight: 700;
  font-size: 22px;
`;

export const H4 = styled.h4`
  ${TypographyCSS}
`;

export const H5 = styled.h5`
  ${TypographyCSS}
`;

export const H6 = styled.h6`
  ${TypographyCSS}
`;

export const P = styled.p`
  ${TypographyCSS}
  color: ${COLORS.WHITE[500]};
  font-size: 16px;
`;

export const Small = styled.small`
  ${TypographyCSS}
  color: ${COLORS.WHITE[300]};
  font-size: 12px;
`;

export const A = styled.a`
  &, &:visited, &:hover, &:active {
    ${TypographyCSS}
  }
  text-decoration: underline;
`;
