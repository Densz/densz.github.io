import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const sidebarProps = {
  open: { x: '0%' },
  closed: { x: '-100%' },
};

const Sidebar = styled(posed.div(sidebarProps))`
  position: absolute;
  width: 100px;
  height: 200px;
  background-color: red;
`;

class Home extends Component {
  state = {
    sidebar: false,
  };

  toogleSidebar = () => {
    this.setState(state => ({
      ...state,
      sidebar: !state.sidebar,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toogleSidebar}>Side bar</button>
        <Sidebar pose={this.state.sidebar ? 'open' : 'closed'} />
      </div>
    );
  }
}

export default Home;
