import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';

import '../styles/MobileNavigator.css';

class MobileNavigator extends Component {
    onClickHandler = () => {
        animateScrollTo(0);
    }

    render() {
        return (
            <div className="MobileNavigator">
                <NavLink className="NavLink" activeClassName="ActiveNavLinkRed" to="/about" onClick={this.onClickHandler}>
                    About
                </NavLink>
                <NavLink className="NavLink" activeClassName="ActiveNavLinkGreen" to="/experience" onClick={this.onClickHandler}>
                    Experience
                </NavLink>
                <NavLink className="NavLink" activeClassName="ActiveNavLinkBlue" to="/contact" onClick={this.onClickHandler}>
                    Contact
                </NavLink>
            </div>
        );
    }
}

export default MobileNavigator;
