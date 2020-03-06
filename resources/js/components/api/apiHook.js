import React, { useState, useEffect } from "react";

function useDataFetcher(url) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error("Error API fetching error");
                }
            })
            .then(arr => {
                setPosts(arr);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
            });
    }, [url]);

    return { posts, isLoading, error };
}

const apiHook = () => {
    const base_url = "https://jsonplaceholder.typicode.com/posts";

    const { posts, isLoading, error } = useDataFetcher(base_url);

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
};

export default apiHook;
