import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GetPosts() {

    const [ posts, setPosts ] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((resp) =>{
            console.log(resp);
            setPosts(resp.data);
        }).catch((err)=>{
            console.log('error occured');
            console.log(err);
        }) 
    },[]);

    return (
        <div>
            <h1>Fetch the user details</h1>
            <hr></hr>
            {posts.map((post) => (
                    <fieldset key={post.id} >
                        <legend> {post.title}</legend>
                        <section>
                            { post.body}
                        </section>
                    </fieldset>
                ))
            }
        </div>
    )
}