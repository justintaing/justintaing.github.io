import React, { Component } from 'react';
import Typist from 'react-typist';

import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="title">
                    <Typist cursor={{
                        blink: true,
                        element: '_'
                    }}>
                        Justin Taing
                        <br/><br/>
                        <span className="grey">&lt;</span>
                        <span className="turquoise">Software&nbsp;&nbsp;&nbsp;</span>
                        <br/>
                        <span className="lightblue">&nbsp;&nbsp;&nbsp;Engineer</span>
                        <span className="grey">/&gt;</span>
                    </Typist>
                    <div className="mobileLogo">
                        Software
                        <br/>
                        Engineer
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
