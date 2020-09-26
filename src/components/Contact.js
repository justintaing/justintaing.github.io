import React, { Component } from 'react';

import '../styles/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="content">
                    <div className="title">Contact</div>
                    <div className="body">
                        <p>My email address is my first initial followed by my last name at fastmail dot com.</p>
                        <a className="link" href="https://github.com/justintaing" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a className="link" href="https://www.linkedin.com/in/justintaing/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
