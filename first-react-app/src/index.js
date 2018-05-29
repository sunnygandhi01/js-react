import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import About from './components/AboutPage';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
