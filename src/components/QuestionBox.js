import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

library.add(faPlus)

class QuestionBox extends Component {
  state = {
    show: false
  }

  constructor(props) {
    super(props);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    if(!this.state.show) {
      return (
        <div className="QuestionBox" onClick={this.toggleShow}>
          <h2>{this.props.question} <span className="plusQuestion"><FontAwesomeIcon icon="plus" /></span></h2>
        </div>
      )
    } else {
      return (
        <div className="QuestionBox" onClick={this.toggleShow}>
          <h2>{this.props.question}</h2>
          <p>{this.props.children}</p>
        </div>
      )
    }
  }
}

export default QuestionBox;
