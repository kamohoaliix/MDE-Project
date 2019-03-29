import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faList, faQuestion } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

library.add(faDatabase);
library.add(faList);
library.add(faQuestion);

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="TitleContainer">
          <h1>Marine Data Exchange Insight</h1>
          <p>An insight into the massive quantity of survey data on the UK seabed.</p>
          <p>Made available by <i><a href="https://www.thecrownestate.co.uk/">The Crown Estate</a></i></p>
          <ul>
            <li><Link to="/summary"><span className="linkIcon"><FontAwesomeIcon icon="list" /></span><br />Summary</Link></li>
            <li><Link to="/data"><span className="linkIcon"><FontAwesomeIcon icon="database" /></span><br />Data</Link></li>
            <li><Link to="/about"><span className="linkIcon"><FontAwesomeIcon icon="question" /></span><br />About Us</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home;
