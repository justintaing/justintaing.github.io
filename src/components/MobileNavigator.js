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
                <NavLink className="NavLink" onClick={this.onClickHandler}activeClassName="ActiveNavLinkRed" to="/about">
                    About
                </NavLink>
                <NavLink className="NavLink" onClick={this.onClickHandler}activeClassName="ActiveNavLinkGreen" to="/experience">
                    Experience
                </NavLink>
                <NavLink className="NavLink" onClick={this.onClickHandler}          activeClassName="ActiveNavLinkBlue" to="/contact">
                    Contact
                </NavLink>
            </div>
        );
    }
}

export default MobileNavigator;
