import React, { Component } from 'react';

import '../styles/Experience.css';

class ExperienceCard extends Component {
    render() {
        return (
            <div className="card-back">
                Experience Card
            </div>
        );
    }
}


class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <div className="content">
                    <div className="title">Experience</div>
                    <div className="body">
                        <ExperienceCard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
