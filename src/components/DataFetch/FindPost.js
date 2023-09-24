import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FindPost(){
    const [post, setPost] = useState([]);
    const [id, setId] = useState();

    useEffect(()=>{
        if(id){
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((resp) => {
                console.log(resp);
                setPost(resp.data)
            }).catch((e) => {
                console.log('Error occured')
            })
        }
    }, [id])

    const setPostId = (e) => {
        if(e.target.value){
            setId(e.target.value)
        }
    }

    return(
        <div>
            <h2>Find post by ID</h2>
            <input type="text" onChange={(e) => setPostId(e)} />
            <hr></hr>
            <div>{ post.title }</div>
        </div>
    )
}