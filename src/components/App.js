import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Home from '../components/Home';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

import '../styles/App.css';

class App extends Component {

    render() {
        return (
            <Router>
            <Route render={({ location }) => (
                <div className="App">
                    <TransitionGroup className="transition-group">
                        <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames='fade'>
                            <section className="route-section">
                                <Switch location={location}>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/about" component={About}/>
                                    <Route exact path="/resume" component={Resume}/>
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
