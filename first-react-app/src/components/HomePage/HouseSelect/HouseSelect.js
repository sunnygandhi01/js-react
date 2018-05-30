import React, { Component } from 'react';
import './HouseSelect.css';
import bootstrap from 'bootstrap';
import FeaturedHouse from '../FeatureHouse/FeaturedHouse';


class HouseSelect extends Component {
 constructor(props) {
   super(props);
   this.state = {
     state: {}
   };

 }

  componentDidMount() {
    this.fetchHouses();
  }

  componentWillMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
      .then(rsp => rsp.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
      })
  }

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    };
  }

  render() {
    return (
      <FeaturedHouse house={this.state.featuredHouse} />
    )
  }
}

export default HouseSelect;

