import styled from 'src/styles/styled-components';
import colors from '../../../constants/colors';

export const SNavWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
`;

/* -------------- */
/* -- TOP MENU -- */
/* -------------- */
export const SRightLinkContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const SLeftLinkContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const SNavButton = styled.button`
  padding: 0;
  color: ${colors.white};
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
`;

export const SLeftAnimatedUnderline = styled.div`
  background-color: ${colors.white};
  width: 0px;
  height: 3px;
  transition: width 0.25s;
  ${SLeftLinkContainer}:hover & {
    width: 100%;
  }
`;

export const SRightAnimatedUnderline = styled.div`
  background-color: ${colors.white};
  float: right;
  width: 0px;
  height: 3px;
  transition: width 0.5s;
  ${SRightLinkContainer}:hover & {
    width: 100%;
  }
`;

/* --------------------------- */
/* ------- SOCIAL LINKS ------ */
/* --------------------------- */
export const SSocialLinksWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
`;

export const SSocialContainer = styled.a`
  position: relative;
  display: flex;
  width: 30px;
  height: 30px;
  border: 1px solid ${colors.white};
  border-radius: 50%;
  align-items: center;
  flex-direction: column;
  margin-left: 30px;
  cursor: pointer;
  overflow: hidden;
`;

export const SSocialImage = styled.img`
  padding-top: 8px;
  width: 15px;
  height: 15px;
  transition: 0.25s;

  ${SSocialContainer}:hover & {
    transform: translate(0, -23px);
  }
`;
