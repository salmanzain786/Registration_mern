import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registration from './Registration';

ReactDOM.render(
  <React.StrictMode>
    <Registration />
  </React.StrictMode>,
  document.getElementById('root')
);

