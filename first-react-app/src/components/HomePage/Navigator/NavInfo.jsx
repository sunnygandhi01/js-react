import React from 'react';
import Globallogo from './GloboLogo.png';
import bootstrap from 'bootstrap';
import './NavInfo.css';

const NavInfo = () => (
  <div className="Nav row">
      <div className="col-5">
        <img src = {Globallogo} className = "Nav-logo" alt = "logo" />
      </div>
    <div className="subtitle col-7">
      Providing houses world wide
    </div>
  </div>
);

export default NavInfo;
