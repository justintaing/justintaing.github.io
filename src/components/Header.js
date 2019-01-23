import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Navigator from './Navigator';

import { name } from '../text/settings.json';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="name">
                    <NavLink className="NavLink-name" to="/">{name}</NavLink>
                </div>
                <div className="nav">
                    <Navigator/>
                </div>
                <div className="spacer"></div>
            </div>
        );
    }
}

export default Header;
