import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import Navigator from './Navigator';

import { name } from '../text/settings.json';
import '../styles/Header.css';

class Header extends Component {
    render() {
        const { location } = this.props;

        return (
            <div className="header">
                <div className="name">
                    <NavLink className={location.pathname !== '/' ? 'NavLink-name' : 'hidden'} to="/">{name}</NavLink>
                </div>
                <div className="nav">
                    <Navigator delay={4000}/>
                </div>
                <div className="spacer">
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
