import React from "react";
import NavBar from "./NavBar/NavBar";
import Tim from "./Tim/index";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogList from "./Blog/BlogList";
import ControlPanel from "./Tim/ControlPanel";

const webApp = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <Tim />
                    </Route>
                    <Route path="/blog">
                        <BlogList />
                    </Route>
                    <Route path="/control-panel">
                        <ControlPanel />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default webApp;
