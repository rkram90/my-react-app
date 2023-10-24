import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
    post: {},
    error: '',
    isLoading: true
};

const reducer = (state, action) => {
    switch (action.type) {
        case "POST_DATA_FETCH_SUCCESS":
            return {
                post: action.payload,
                error: '',
                isLoading: false
            }
        case "POST_DATA_FETCH_FAILS":
            return {
                post: {},
                error: 'Oops Something went wrong!!!',
                isLoading: false
            }
        default:
            return state;
    }
}

function UserReducerDataFetch() {
    const [state, dispatcher] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/').then((resp) => {
            dispatcher({ type: "POST_DATA_FETCH_SUCCESS", payload: resp.data });
        }).catch((err) => {
            dispatcher({ type: "POST_DATA_FETCH_FAILS" })
        })
    },
        []
    );

    return (
        <div>
            <h1>Data handled in useReducer</h1>
            {
                state.isLoading ? 'Data is loading...' : state.post.title
            }
            {state.error && state.error}
        </div>
    );
}

export default UserReducerDataFetch;