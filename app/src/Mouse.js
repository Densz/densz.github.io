import * as React from 'react';
import { TweenLite } from 'gsap';
import styled from 'styled-components';

const SMouse = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  transform: translateX(-10px) translateY(-10px);
`;

class Mouse extends React.Component {
  image = null;
  myTween = null;

  componentDidMount() {
    window.addEventListener(
      'mousemove',
      e => {
        TweenLite.to(this.image, 0, {
          x: e.clientX - 10,
          y: e.clientY - 10,
        });
      },
      false
    );
  }

  render() {
    const { children } = this.props;

    return (
      <div style={{ cursor: 'none' }}>
        {/* eslint-disable-next-line */}
        <SMouse ref={ref => (this.image = ref)} />
        {children}
      </div>
    );
  }
}

export default Mouse;
