import React, { Component } from 'react';

import Navigator from './Navigator';

import { name } from '../text/settings.json';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="name">{name}</div>
                <div className="nav">
                    <Navigator/>
                </div>
                <div className="spacer"></div>
            </div>
        );
    }
}

export default Header;
