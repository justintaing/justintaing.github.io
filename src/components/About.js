import React, { Component } from 'react';

import Header from './Header';

import '../styles/About.css';
import { bio } from '../text/about.json';

class About extends Component {
    render() {
        return (
            <div className="about">
                <Header/>
                <div className="content">
                    <div className="title">About</div>
                    <div className="body">
                        {bio}
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
