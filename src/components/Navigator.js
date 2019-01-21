import React, { Component } from 'react';
import Circle from '../components/Circle';
import '../styles/Navigator.css';

class Navigator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            label: '...'
        }
    }

    updateLabel = (label) => {
        this.setState({
            label: label
        });
    }

    clearLabel = () => {
        this.setState({
            label: '...'
        });
    }

    render = () => {
        return (
            <div className="container">
                <div className="circles">
                    <Circle label="About" enter={this.updateLabel} exit={this.clearLabel}/>
                    <Circle label="Resume" enter={this.updateLabel} exit={this.clearLabel}/>
                    <Circle label="Contact" enter={this.updateLabel} exit={this.clearLabel}/>
                </div>
                <div className="label">
                    {this.state.label}
                </div>
            </div>
        );
    }
}

export default Navigator;