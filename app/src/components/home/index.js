import * as React from 'react';
import PageWithNavHOC from '../shared/nav/PageWithNavHOC';
import HomeComponent from './components/Home';

const Home = ({ navigateState, outroAnimationDone }) => {
  return (
    <HomeComponent
      navigateState={navigateState}
      outroAnimationDone={outroAnimationDone}
    />
  );
};

export default PageWithNavHOC(Home);
