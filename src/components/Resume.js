import React, { Component } from 'react';

import Header from '../components/Header';

import '../styles/Resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <Header/>
                <div className="content">
                    <div className="title">Resume</div>
                    <div className="body"></div>
                </div>
            </div>
        );
    }
}

export default Resume;
