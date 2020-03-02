import React from "react";
import NavBar from "./NavBar/NavBar";
import Tim from "./Tim/index";
import Footer from "./Layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogList from "./Blog/BlogList";

const webApp = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/">
                        <Tim />
                    </Route>
                    <Route path="/blog">
                        <BlogList />
                    </Route>
                    <Route path="/">
                        <Tim />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default webApp;
