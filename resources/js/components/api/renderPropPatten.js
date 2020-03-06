import React, { Component } from "react";

// this is render prop patten to get api
class DataFetcher extends Component {
    state = {
        posts: [],
        isLoading: false,
        error: null
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(this.props.url)
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
        return this.props.children(this.state);
    }
}

const base_url = "https://jsonplaceholder.typicode.com/posts";

class AppRenderProps extends Component {
    render() {
        return (
            <div>
                <h1>With Render Prop</h1>
                <DataFetcher url={base_url}>
                    {({ error, isLoading, posts }) => {
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
                    }}
                </DataFetcher>
            </div>
        );
    }
}

export default AppRenderProps;
