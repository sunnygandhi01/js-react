import React, { Component } from 'react';
import logo from './logo.svg';
import './HomePage.css';
import {Button} from 'react-bootstrap';
import Header from './Header/Header';

class HomePage extends Component {
  render() {
    return (
        <div >
          <Header />
        </div>
    );
  }
}

export default HomePage;
