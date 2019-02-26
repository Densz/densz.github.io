import * as React from 'react';
import PageWithNavHOC from '../shared/nav/PageWithNavHOC';
import Intro from './components/Intro';

const Presentation = ({ navigateState, outroAnimationDone }) => {
  return (
    <Intro
      navigateState={navigateState}
      outroAnimationDone={outroAnimationDone}
    />
  );
};

export default PageWithNavHOC(Presentation);
