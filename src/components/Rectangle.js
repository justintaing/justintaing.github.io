import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';

import '../styles/Rectangle.css';

class Rectangle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            mouseDown: false,
            x: 0,
            initialLoad: true
        };

        this.rectangleDiv = React.createRef();
        this.labelDiv = React.createRef();
        this._mounted = false;
        this._delay = this.props.delay;
    }

    componentDidMount() {
        this.updateLabelPosition();
        window.addEventListener('resize', this.updateLabelPosition);

        this._mounted = true;

        setTimeout(
            function() {
                if (this._mounted) {
                    this.setState({
                        initialLoad: false
                    })
                }
            }.bind(this),
            this._delay
        );
    }

    componentWillUnmount() {
        this._mounted = false;
        window.removeEventListener('resize', this.updateLabelPosition);
    }

    updateLabelPosition = () => {
        if (this._mounted) {
            let rect = ReactDOM.findDOMNode(this.rectangleDiv.current).getBoundingClientRect();
            let rectWidth = this.rectangleDiv.current.clientWidth / 2;
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

    onClickHandler = () => {
        animateScrollTo(0);
    }

    render = () => {
        return (
            <div className="container">
                <NavLink to={'/'+this.props.label.toLowerCase()} activeClassName={this.props.initialColor + '-active'}>
                    <div className={'rectangle ' + 
                        ((this.state.initialLoad || this.state.mouseDown) ? this.props.initialColor : 'NavLinkActive')}
                        ref={this.rectangleDiv}
                        onMouseEnter={this.onMouseEnterHandler}
                        onMouseLeave={this.onMouseLeaveHandler}
                        onClick={this.onClickHandler}
                        onMouseDown={this.onMouseDownHandler}
                        onMouseUp={this.onMouseUpHandler}>
                    </div>
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

export default Rectangle;