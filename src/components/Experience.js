import React, { Component } from 'react';

import ExperienceList from '../text/experience.json';

import '../styles/Experience.css';

class ExperienceCard extends Component {
    render() {
        var experience = this.props.experience;
        var bullets = experience.bullets.map((bullet) => {
            return (<li>{bullet}</li>);
        });

        return (
            <div className="card">
                <div className="cardHeader">
                    <div className="jobTitle">
                        {experience.title}
                    </div>
                    <div className="timeWorked">
                        {experience.timeWorked}
                    </div>
                </div>
                <div className="cardContent">
                    <div className="company">
                        {experience.company}
                        &nbsp;—&nbsp;
                        <span className="companyLocation">
                            {experience.location}
                        </span>
                    </div>
                    <ul className="bullets">
                        {bullets}
                    </ul>
                </div>
            </div>
        );
    }
}

class Experience extends Component {
    render() {
        var experiences = ExperienceList.map((item) => {
            return (<ExperienceCard experience={item}/>);
        });

        return (
            <div className="experience">
                <div className="content">
                    <div className="title">Experience</div>
                    <div className="body">
                        {experiences}
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
