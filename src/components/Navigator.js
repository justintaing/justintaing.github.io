import React, { Component } from 'react';
import Circle from '../components/Circle';
import '../styles/Navigator.css';

class Navigator extends Component {
    render = () => {
        return (
            <div className="container">
                <div className="circles">
                    <Circle label="About" />
                    <Circle label="Experience" />
                    <Circle label="Contact" />
                </div>
            </div>
        );
    }
}

export default Navigator;
