import React, { Component } from 'react';

import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="title">
                    <span className="grey">&lt;</span>
                    <span className="turquoise">Software&nbsp;&nbsp;&nbsp;</span>
                    <br/>
                    <span className="lightblue">&nbsp;&nbsp;Engineer</span>
                    <span className="grey">/&gt;</span>
                </div>
            </div>
        );
    }
}

export default Home;
