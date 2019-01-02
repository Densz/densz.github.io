import styled from 'styled-components';

export const mobiles = styles => {
  return `
    @media (max-width: 576px) {
      ${styles}
    }
  `;
};

export const tablets = styles => {
  return `
    @media (max-width: 768px) {
      ${styles}
    }
  `;
};

export const STitle = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-size: 2em;
`;

export const SDescription = styled.p`
  font-family: 'Lekton', sans-serif;
  font-size: 1.4em;
`;

export const SLink = styled.a`
  font-family: 'Lekton', sans-serif;
  font-size: 1.4em;
  text-decoration: none;
`;
