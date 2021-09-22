import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const elementLi = React.createElement('li', {className: 'li'}, ' element')

const element = React.createElement('ul', {className: 'ul'}, elementLi)


ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

