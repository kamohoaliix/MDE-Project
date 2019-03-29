import React, { Component } from 'react';
import QuestionBox from '../components/QuestionBox';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <QuestionBox question="What is the Marine Data Exchange?">
          A large online database of marine survey data taken by The Crown Estate, with the goal of encouraging scientific exploration and study.
        </QuestionBox>
        <QuestionBox question="What kind of survey data do we have?">
          We collect all sorts of survey data from the sea and sky around the UK. This could include (but is not restricted to) such categories as Ornithalogical, Geophysical and Epifauna datasets.
        </QuestionBox>
        <QuestionBox question="How is our data structured?">
          Our data is organised into 'Survey Series' which are then further broken down into 'Datasets' and 'Reports,' and each of those has individual disovery metadata files, making it easy to search for and find specific data.
        </QuestionBox>
        <QuestionBox question="Where do I find this data?">
          The specific data can be found <a href="https://www.marinedataexchange.co.uk">here</a>.
        </QuestionBox>
      </div>
    )
  }
}

export default About;
