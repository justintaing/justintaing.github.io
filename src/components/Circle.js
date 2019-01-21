import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    }

    updateLabelPosition = () => {
        let rect = ReactDOM.findDOMNode(this.circleDiv.current).getBoundingClientRect();
        let rectWidth = this.circleDiv.current.clientWidth / 2;
        let labelWidth = this.labelDiv.current.clientWidth;

        this.setState({
            x: (rect.x) - (labelWidth/2) + rectWidth
        });
    }

    componentDidMount() {
        this.updateLabelPosition();
        window.addEventListener("resize", this.updateLabelPosition);

        setTimeout(
            function() {
                this.setState({
                    initialLoad: false
                })
            }.bind(this),
            2000
        );
    }

    onMouseEnterHandler = () => {
        this.setState({
            hover: true
        });
        this.updateLabelPosition();
    }

    onMouseLeaveHandler = () => {
        this.setState({
            hover: false
        });
    }

    onMouseDownHandler = () => {
        this.setState({
            mouseDown: true
        });
        console.log('clicked');
    }

    onMouseUpHandler = () => {
        this.setState({
            mouseDown: false
        });
        console.log('unlicked');
    }

    handleClick = () => {
        this.props.navigate(this.props.label);
    }

    render = () => {
        return (
            <div className="container">
                <div className={"circle " + 
                    ((this.state.initialLoad || this.state.mouseDown) && this.props.initialColor)}
                    ref={this.circleDiv}
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}
                    onClick={this.handleClick}
                    onMouseDown={this.onMouseDownHandler}
                    onMouseUp={this.onMouseUpHandler}>
                </div>
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
