import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
