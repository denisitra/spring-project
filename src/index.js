import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './Store/store';
import App from './components/App/App';


ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);
