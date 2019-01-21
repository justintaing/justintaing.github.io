import React, { Component } from 'react';

import Circle from '../components/Circle';
import '../styles/Navigator.css';

class Navigator extends Component {
    constructor(props) {
        super(props);
        this._mounted = false;
    }

    componentDidMount() {
        this._mounted = true;
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render = () => {
        return (
            <div className="container">
                <Circle label="About" initialColor="red" />
                <Circle label="Resume" initialColor="green" />
                <Circle label="Contact" initialColor="blue" />
            </div>
        );
    }
}

export default Navigator;
