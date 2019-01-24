import React, { Component } from 'react';

import '../styles/Experience.css';

class ExperienceCard extends Component {
    constructor(props) {
        super(props);

        this.experience = this.props.experience;
    }

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
                        <ExperienceCard experience={{}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
