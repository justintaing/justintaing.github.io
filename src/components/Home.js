import React, { Component } from 'react';

import Navigator from './Navigator';

import '../styles/Home.css';
import { name, title } from '../text/settings.json';

class Home extends Component {
    render() {
        return (
            <div className="home">

                <div className="name">&lt;{title}/&gt;</div>
            </div>
        );
    }
}

export default Home;
