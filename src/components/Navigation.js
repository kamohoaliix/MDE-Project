import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="NavTitle">
          <h1><span>MDE</span> Insight</h1>
          <span>Marine Data Exchange Insight</span>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/summary">Summary</Link></li>
          <li><Link to="/data">Data</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
