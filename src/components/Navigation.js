import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
          <li><NavLink to="/" activeClassName="is-active">Home</NavLink></li>
          <li><NavLink to="/summary" activeClassName="is-active">Summary</NavLink></li>
          <li><NavLink to="/data" activeClassName="is-active">Data</NavLink></li>
          <li><NavLink to="/about" activeClassName="is-active">About Us</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Navigation;
