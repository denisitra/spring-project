import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { navigationList, state } from './Store/store';


ReactDOM.render(
  <React.StrictMode>
    <App state={state} list={navigationList}/>
  </React.StrictMode>,
  document.getElementById('root')
);
