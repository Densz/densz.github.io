import * as React from 'react';
import PageWithNavHOC from '../shared/nav/PageWithNavHOC';
import Presentation from './components/Presentation';

interface INavigateState {
  redirecting: boolean;
  route: string;
}

interface IProps {
  navigateState: {
    [key: string]: INavigateState;
  };
}

const Home = ({ navigateState }: IProps) => {
  return (
    <>
      <Presentation navigateState={navigateState} />
    </>
  );
};

export default PageWithNavHOC(Home);
