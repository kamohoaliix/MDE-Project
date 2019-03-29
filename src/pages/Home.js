import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="TitleContainer">
          <h1>Marine Data Exchange Insight</h1>
          <p>An insight into the massive quantity of survey data on the UK seabed.</p>
          <p>Made available by <i>The Crown Estate</i></p>
        </div>
      </div>
    )
  }
}

export default Home;
