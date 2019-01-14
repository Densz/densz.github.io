import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';

const App = () => (
  <Router>
    <div>
      <Route path="/" exact={true} component={Home} />
      <Route path="/projects/" component={Projects} />
    </div>
  </Router>
);

export default App;
