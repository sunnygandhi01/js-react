import React, { Component } from 'react';
import "./House.css";
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap';
import reactbootstrap from 'react-bootstrap';


class House extends Component {
  state = {};

  render() {
    const house = this.props.house;
    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-md-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-md-12">{house.address}</h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="House" />
          </div>
        </div>
        <div className="col-md-5">
          <p className="price">${house.price}</p>
          <p className="description">{house.description}</p>
        </div>
      </div>
    );
  }
}

export default House;
