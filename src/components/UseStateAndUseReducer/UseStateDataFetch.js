import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UseStateDataFetch() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/').then((resp) => {
            setIsLoading(false);
            setPost(resp.data);
            setIsError('');
        }).catch((err) => {
            setIsLoading(false);
            setPost({});
            setIsError('Something... went wrong!!')
        })
    },
        []
    )
    return (
        <div>
            <h1>This data fetch by axios and data handled in useState</h1>
            {
                isLoading ? 'Data is loading...' : post.title
            }

            {isError && isError}

        </div>
    );
}

export default UseStateDataFetch;