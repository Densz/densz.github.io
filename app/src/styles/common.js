import styled from 'styled-components';

export const mobiles = styles => {
  return `
    @media (max-width: 577px) {
      ${styles}
    }
  `;
};

export const tablets = styles => {
  return `
    @media (max-width: 769px) {
      ${styles}
    }
  `;
};

export const STitle = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-size: 2em;
  ${tablets(`
    font-size: 1.5em;
  `)};
`;

export const SDescription = styled.p`
  font-family: 'Lekton', sans-serif;
  font-size: 1.4em;
  ${tablets(`
    font-size: 1em;
  `)};
`;

export const SLink = styled.a`
  font-family: 'Lekton', sans-serif;
  font-size: 1.4em;
  text-decoration: none;
  ${tablets(`
    font-size: 1em;
  `)};
`;
