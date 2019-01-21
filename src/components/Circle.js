import React, { Component } from 'react';
import '../styles/Circle.css';

class Circle extends Component {
    onMouseEnterHandler = () => {
        this.props.enter(this.props.label);
    }

    onMouseLeaveHandler = () => {
        this.props.exit();
    }

    render = () => {

        return (
            <div className="container">
                <div className="circle"
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}>
                </div>
            </div>
        );
    }
}

export default Circle;