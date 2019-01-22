import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';

import '../styles/App.css';

class App extends Component {

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
            <Route render={({ location }) => (
                <div className="App">
                    <TransitionGroup className="transition-group">
                        <CSSTransition
                        key={location.pathname}
                        timeout={300}
                        classNames='fade'>
                            <section className="route-section">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/about" component={About}/>
                                    <Route exact path="/experience" component={Experience}/>
                                    <Route exact path="/contact" component={Contact}/>
                                </Switch>
                            </section>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            )}/>
            </Router>
        );
    }
}

export default App;
