import React, { Component } from 'react';

import Navigator from '../components/Navigator';

import '../styles/Home.css';
import { name, title } from '../text/settings.json';

class Home extends Component {
    render() {
        return (
            <div className="home">        
                <div className="name">{name}</div>
                <div className="subtitle">{title}</div>
                <Navigator/>
            </div>
        );
    }
}

export default Home;
