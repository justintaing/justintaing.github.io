import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { name } from '../text/settings.json';
import '../styles/MobileHeader.css';

class MobileHeader extends Component {
    render() {
        return (
            <div className="MobileHeader">
                <NavLink className="NavLink-name" to="/">{name}</NavLink>
            </div>
        );
    }
}

export default MobileHeader;
