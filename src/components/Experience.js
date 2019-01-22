import React, { Component } from 'react';

import Header from './Header';

import '../styles/Experience.css';

class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <Header/>
                <div className="content">
                    <div className="title">Experience</div>
                    <div className="body"></div>
                </div>
            </div>
        );
    }
}

export default Experience;
