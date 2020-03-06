import React, { Component } from "react";

const base_url = "https://jsonplaceholder.typicode.com/posts";

// this is the traditional way to get api
class ApiFetcherClass extends Component {
    state = {
        posts: [],
        isLoading: false,
        error: null
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(base_url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error("Error api fetching error");
                }
            })
            .then(arr => {
                this.setState({ posts: arr });

                this.setState({ isLoading: false });
            })
            .catch(err => {
                this.setState({ error: err });
            });
    }

    render() {
        const { posts, isLoading, error } = this.state;

        if (error) {
            return <h1>{error.message}</h1>;
        }
        return (
            <div>
                {isLoading ? (
                    <h1>loading</h1>
                ) : (
                    posts.map(post => (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default ApiFetcherClass;
