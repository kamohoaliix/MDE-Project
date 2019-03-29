import React, { Component } from 'react';
import '../App.css';

class Summary extends Component {
  render() {
    return (
      <div className="Summary">
        <div className="MainBox">
          <span>Quantity of Survey Series : </span>
          <h2>2282 Survey Series</h2>
        </div>
        <div className="SubBoxes">
          <div className="SubBox">
            <span>% of Data Publicly Available : </span>
            <h3>59%</h3>
          </div>
          <div className="SubBox">
            <span>Total Public Downloads (2018) : </span>
            <h3>10,001</h3>
          </div>
          <div className="SubBox">
            <span>Total Public Downloads (Now) : </span>
            <h3>36,193</h3>
          </div>
        </div>
        <div className="MainBox">
          <span>How much data have we stored?</span>
          <h2>167 Terabytes</h2>
        </div>
      </div>
    )
  }
}

export default Summary;
