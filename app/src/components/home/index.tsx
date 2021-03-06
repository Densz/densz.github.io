import * as React from 'react';
import PageWithNavHOC from '../shared/nav/PageWithNavHOC';
import HomeComponent from './components/Home';

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
      <HomeComponent
        navigateState={navigateState}
        outroAnimationDone={outroAnimationDone}
      />
    </>
  );
};

export default PageWithNavHOC(Home);
