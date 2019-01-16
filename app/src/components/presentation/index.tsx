import * as React from 'react';
import PageWithNavHOC from '../shared/nav/PageWithNavHOC';
import Intro from './components/Intro';

interface INavigateState {
  redirecting: boolean;
  route: string;
}

interface IProps {
  location: any;
  outroAnimationDone: (() => void);
  navigateState: {
    [key: string]: INavigateState;
  };
}

const Presentation = ({ navigateState, outroAnimationDone }: IProps) => {
  return (
    <Intro
      navigateState={navigateState}
      outroAnimationDone={outroAnimationDone}
    />
  );
};

export default PageWithNavHOC(Presentation);
