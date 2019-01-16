import * as React from 'react';

interface INavigateState {
  redirecting: boolean;
  route: string;
}

interface IProps {
  outroAnimationDone: (() => void);
  navigateState: {
    [key: string]: INavigateState;
  };
}

class Intro extends React.Component<IProps, {}> {
  public componentDidUpdate = (prevProps: IProps) => {
    if (
      !prevProps.navigateState.redirecting &&
      this.props.navigateState.redirecting
    ) {
      this.props.outroAnimationDone();
    }
  };

  public render() {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
        }}
      >
        Okay
      </div>
    );
  }
}

export default Intro;
