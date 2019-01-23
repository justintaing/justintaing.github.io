import React, { Component } from 'react';

import Rectangle from './Rectangle';
import '../styles/Navigator.css';

class Navigator extends Component {
    render = () => {
        return (
            <div className="container">
                <Rectangle label="About" delay={this.props.delay} initialColor="red" />
                <Rectangle label="Experience" delay={this.props.delay} initialColor="green" />
                <Rectangle label="Contact" delay={this.props.delay} initialColor="blue" />
            </div>
        );
    }
}

export default Navigator;
