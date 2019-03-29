import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Data from './pages/Data';
import About from './pages/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <div className="Content">
            <Route exact path="/" component={Home} />
            <Route path="/summary" component={Summary} />
            <Route path="/data" component={Data} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
