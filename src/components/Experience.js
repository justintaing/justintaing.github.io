import React, { Component } from 'react';

import ExperienceList from '../text/experience.json';

import '../styles/Experience.css';

class ExperienceCard extends Component {
    render() {
        var experience = this.props.experience;

        var positions = experience.positions.map(position => {
            var bullets = position.bullets.map((bullet) => {
                return (<li className="bullet">{bullet}</li>);
            });

            return (
                <li>
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
        var experiences = ExperienceList.map((experience) => {
            return (<ExperienceCard experience={experience}/>);
        })

        return (
            <div className="experience">
                <div className="content">
                    <div className="title">Experience</div>
                    <div className="body">
                        {experiences}
                    </div>
                </div>
                <div className="notMobileFriendlyYet">
                    This website is best viewed on a desktop.
                </div>
            </div>
        );
    }
}

export default Experience;
