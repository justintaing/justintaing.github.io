import React, { Component } from 'react';

import '../styles/About.css';
import { bio, education } from '../text/about.json';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="content">
                    <div className="title">About</div>
                    <div className="body bio">
                        {bio}
                    </div>
                    <div className="body bio">
                        {education}
                    </div>
                </div>
                <div className="notMobileFriendlyYet">
                    This website is best viewed on a desktop.
                </div>
            </div>
        );
    }
}

export default About;
