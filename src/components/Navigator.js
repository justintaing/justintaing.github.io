import React, { Component } from 'react';
import Circle from '../components/Circle';
import '../styles/Navigator.css';

class Navigator extends Component {
    navigate = (label) => {
        console.log(label);
    }

    render = () => {
        return (
            <div className="container">
                <Circle label="About" initialColor="red" navigate={this.navigate}/>
                <Circle label="Experience" initialColor="green" navigate={this.navigate}/>
                <Circle label="Contact" initialColor="blue" navigate={this.navigate}/>
            </div>
        );
    }
}

export default Navigator;
