import React, { Component } from 'react';

import logo from '../svg/logo.svg';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>Made with React</div>
        <div><img src={logo} className="App-logo" alt="React logo"/></div>
      </div>
    );
  }
}

export default Footer;