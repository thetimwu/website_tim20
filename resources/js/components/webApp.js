import React from "react";
import NavBar from "./NavBar/NavBar";
import Tim from "./Tim/index";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogIndex from "./Blog/index";
import ControlPanel from "./controllPanel/ControlPanel";
import DataStructure from "./dataStructure/dataStructrue";
import Algorithm from "./algorithm/algorithm";
import Fun from "./fun/fun";
import Programming from "./programming/programming";

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
                    <Route path="/data-structure">
                        <NavBar />
                        <DataStructure />
                    </Route>
                    <Route path="/algorithm">
                        <NavBar />
                        <Algorithm />
                    </Route>
                    <Route path="/fun">
                        <NavBar />
                        <Fun />
                    </Route>
                    <Route path="/Programming">
                        <NavBar />
                        <Programming />
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
