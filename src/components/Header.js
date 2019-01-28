import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Navigator from './Navigator';

import { name } from '../text/settings.json';
import logo from '../svg/logo.svg';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="name">
                    <NavLink className="NavLink-name" to="/">{name}</NavLink>
                </div>
                <div className="nav">
                    <Navigator delay={4000}/>
                </div>
                <div className="spacer">
                    <div>Made with React</div>
                    <div><img src={logo} className="App-logo" alt="React logo"/></div>
                </div>
            </div>
        );
    }
}

export default Header;
