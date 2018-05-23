import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistroy } from 'react-router';
import routes from './routes';
import './styless.css/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistroy} routes={routes} />,
  document.getElementById('app')
);
