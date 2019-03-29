import React, { Component } from 'react';
import '../App.css';

class Data extends Component {
  state = {
    physical: false,
    environmental: false,
    social: false
  }

  constructor(props) {
    super(props);
    this.togglePhysical = this.togglePhysical.bind(this);
    this.toggleEnvironmental = this.toggleEnvironmental.bind(this);
    this.toggleSocial = this.toggleSocial.bind(this);
  }

  togglePhysical() {
    this.setState({
      physical: !this.state.physical
    })
  }

  toggleEnvironmental() {
    this.setState({
      environmental: !this.state.environmental
    })
  }

  toggleSocial() {
    this.setState({
      social: !this.state.social
    })
  }

  render() {
    return (
      <div className="Data">
        <table>
          <tr>
            <td valign="top">
              <span onClick={this.togglePhysical}>Physical</span><br />
              { this.state.physical &&
                <ul>
                  <li>Geophysical</li>
                  <li>Sedimentary</li>
                  <li>Geotechnical</li>
                </ul>
              }
            </td>
            <td valign="top">
              <span onClick={this.toggleEnvironmental}>Environmental</span><br />
              { this.state.environmental &&
                <ul>
                  <li>Meteorology</li>
                  <li>Coastal Processes</li>
                  <li>Benthic Ecology</li>
                  <li>Ornathology and Marine Mammals</li>
                  <li>Epifauna and Fish</li>
                  <li>Metocean</li>
                  <li>Intertidal Ecology</li>
                  <li>Onshore</li>
                  <li>Noise</li>
                </ul>
              }
            </td>
            <td valign="top">
              <span onClick={this.toggleSocial}>Social</span><br />
              { this.state.social &&
                <ul>
                  <li>Environmental Statements</li>
                  <li>Archeology</li>
                  <li>Shipping and Navigation</li>
                  <li>Monitoring</li>
                  <li>Unexploded Ordinance</li>
                </ul>
              }
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Data;
