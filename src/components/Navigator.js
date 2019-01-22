import React, { Component } from 'react';

import Rectangle from './Rectangle';
import '../styles/Navigator.css';

class Navigator extends Component {
    render = () => {
        return (
            <div className="container">
                <Rectangle label="About" initialColor="red" />
                <Rectangle label="Resume" initialColor="green" />
                <Rectangle label="Contact" initialColor="blue" />
            </div>
        );
    }
}

export default Navigator;
