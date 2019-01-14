import * as React from 'react';
import PageWithNavHOC from '../shared/nav/PageWithNavHOC';
import Presentation from './components/Presentation';

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

const Home = ({ navigateState, outroAnimationDone }: IProps) => {
  return (
    <>
      <Presentation
        navigateState={navigateState}
        outroAnimationDone={outroAnimationDone}
      />
    </>
  );
};

export default PageWithNavHOC(Home);
