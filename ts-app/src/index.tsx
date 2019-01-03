import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/StatefullHello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name="Typescript" enthusiasmLevel={1} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
