import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { withRouter } from "react-router-dom";

class BlogList extends Component {
    state = {
        blogs: [],
        isLoading: false,
        error: ""
    };

    render() {
        return (
            <div>
                <NavBar />
                <h1>Testing</h1>
            </div>
        );
    }
}

export default withRouter(BlogList);
