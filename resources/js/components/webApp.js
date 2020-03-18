import React from "react";
import NavBar from "./NavBar/NavBar";
import Tim from "./Tim/index";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogIndex from "./Blog/index";
import ControlPanel from "./controllPanel/ControlPanel";

const webApp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <NavBar />
                        <Tim />
                    </Route>
                    <Route path="/blog">
                        <NavBar />
                        <BlogIndex />
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
