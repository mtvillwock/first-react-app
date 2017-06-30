import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App text="Props text here" number={5} />,
  document.getElementById('root')
);
registerServiceWorker();
