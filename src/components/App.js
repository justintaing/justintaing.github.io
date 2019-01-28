import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Header from './Header';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Header/>
                    <div className="AppContent">
                        <Route render={({ location }) => (
                            <TransitionGroup className="transition-group">
                                <CSSTransition
                                    key={location.pathname}
                                    timeout={300}
                                    classNames="fade">
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
                        )}/>
                    </div>
                    <div className="notMobileFriendlyYet">
                        This website currently does not support mobile viewing, but it's in the works! For now, please view this website on a desktop.
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
