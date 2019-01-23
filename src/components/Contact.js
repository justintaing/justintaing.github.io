import React, { Component } from 'react';

import Header from './Header';

import '../styles/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Header/>
                <div className="content">
                    <div className="title">Contact</div>
                    <div className="body">
                        <a className="link" href="mailto:taingjustin@icloud.com" rel="noopener noreferrer">
                            <i class="fas fa-envelope-square"></i>
                        </a>
                        <a className="link" href="https://www.linkedin.com/in/justintaing/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a className="link" href="https://github.com/justintaing" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
