import React, { Component } from 'react';
import logo from './Header/logo.svg';
import './Header/Header.css';
import {Button} from 'react-bootstrap';
import Header from './Header/Header';
import NavInfo from '../HomePage/Navigator/NavInfo';
import HouseSelect from './HouseSelect/HouseSelect';

class HomePage extends Component {
  render() {
    return (
        <div >
          <Header />
          <NavInfo />
          <HouseSelect />
        </div>
    );
  }
}

export default HomePage;
