import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import '../styles/Circle.css';

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            mouseDown: false,
            x: 0,
            initialLoad: true
        };

        this.circleDiv = React.createRef();
        this.labelDiv = React.createRef();
        this._mounted = false;
    }

    componentDidMount() {
        this.updateLabelPosition();
        window.addEventListener("resize", this.updateLabelPosition);

        this._mounted = true;

        setTimeout(
            function() {
                if (this._mounted) {
                    this.setState({
                        initialLoad: false
                    })
                }
            }.bind(this),
            2000
        );
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    updateLabelPosition = () => {
        if (this._mounted) {
            let rect = ReactDOM.findDOMNode(this.circleDiv.current).getBoundingClientRect();
            let rectWidth = this.circleDiv.current.clientWidth / 2;
            let labelWidth = this.labelDiv.current.clientWidth;

            this.setState({
                x: (rect.x) - (labelWidth/2) + rectWidth
            });
        }
    }

    onMouseEnterHandler = () => {
        if (this._mounted) {
            this.setState({
                hover: true
            });
            this.updateLabelPosition();
        }
    }

    onMouseLeaveHandler = () => {
        if (this._mounted) {
            this.setState({
                hover: false
            });
        }
    }

    onMouseDownHandler = () => {
        if (this._mounted) {
            this.setState({
                mouseDown: true
            });
        }
    }

    onMouseUpHandler = () => {
        if (this._mounted) {
            this.setState({
                mouseDown: false
            });
        }
    }

    // handleClick = () => {
    //     this.props.navigate(this.props.label);
    // }

    render = () => {
        return (
            <div className="container">
                <NavLink to={'/'+this.props.label} className={"circle " + 
                    ((this.state.initialLoad || this.state.mouseDown) && this.props.initialColor)}
                    ref={this.circleDiv}
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                    onClick={this.handleClick}
                    onMouseDown={this.onMouseDownHandler}
                    onMouseUp={this.onMouseUpHandler}>
                </NavLink>
                <div className="label"
                    ref={this.labelDiv}
                    style={{
                        left: this.state.x,
                    }}>
                    <div className={this.state.hover ? 'visible' : 'invisible'}>
                        {this.props.label}
                    </div>
                </div>
            </div>
        );
    }
}

export default Circle;
