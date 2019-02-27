import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Presentation from './pages/presentation';
import Mouse from './Mouse';

const App = () => (
  <Router>
    <Mouse>
      <Route path="/" exact={true} component={Home} />
      <Route path="/projects/" component={Projects} />
      <Route path="/presentation/" component={Presentation} />
    </Mouse>
  </Router>
);

export default App;
