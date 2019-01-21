import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Circle.css';

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            x: 0
        };

        this.circleDiv = React.createRef();
        this.labelDiv = React.createRef();
    }

    componentDidMount() {
        let rect = ReactDOM.findDOMNode(this.circleDiv.current).getBoundingClientRect();
        let labelWidth = this.labelDiv.current.clientWidth;

        this.setState({
            x: (rect.x) - (labelWidth/2) + 25
        });
    }

    onMouseEnterHandler = () => {
        this.setState({
            hover: true
        });
    }

    onMouseLeaveHandler = () => {
        this.setState({
            hover: false
        });
    }

    render = () => {
        return (
            <div className="container">
                <div className="circle"
                    ref={this.circleDiv}
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler}>
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
