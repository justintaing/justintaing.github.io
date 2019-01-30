import React, { Component } from 'react';

import ExperienceList from '../text/experience.json';

import '../styles/Experience.css';

class ExperienceCard extends Component {
    render() {
        var experience = this.props.experience;

        var positions = experience.positions.map((position, index) => {
            var bullets = position.bullets.map((bullet, index) => {
                return (<li className="bullet" key={index}>{bullet}</li>);
            });

            return (
                <li key={index}>
                    <div className="position">
                        <div className="titleHeader">
                            <div className="jobTitle">
                                {position.title}
                            </div>
                            <div className="timeAtPosition">
                                {position.dateRange}
                            </div>
                        </div>
                        <ul className="bullets">
                            {bullets}
                        </ul>
                    </div>
                </li>
            );
        });

        return (
            <div className="card">
                <div className="cardHeader">
                    <div className="company">
                        <div>{experience.company}</div>
                        <div className="companyLocation">{experience.location}</div> 
                    </div>
                    <div className="timeAtCompany">
                        {experience.dateRange}
                    </div>
                </div>
                <div className="summaryOfCareer">
                    {experience.summary}
                </div>
                <div className="cardContent">
                    <ul>{positions}</ul>
                </div>
            </div>
        );
    }
}

class Experience extends Component {
    render() {
        var experiences = ExperienceList.map((experience, index) => {
            return (<ExperienceCard key={index} experience={experience}/>);
        })

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
