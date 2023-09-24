import React, { useEffect, useState} from "react";

export default function DisplayXYAxis() {
    const [ xaxis, setXaxis]   = useState(0);
    const [ yaxis, setYaxis ] = useState(0);

    const logMousePosition = (e) => {
        console.log(e.clientX);
        console.log(e.clientY);
        setXaxis(e.clientX);
        setYaxis(e.clientY);
    }

    useEffect(() => {
        console.log('Added listener useEffect');
        window.addEventListener('mousemove', logMousePosition); 
        
        return  () => {
            console.log('Removed listener useEffect');
            window.removeEventListener('mousemove', logMousePosition); 
        }
    },[])

    return (
        <div>
            <h4>Adding listener in useEffect</h4>
            <hr></hr>
            <h5>Mouse co-ordinates</h5>
            co-ordinate of X is {xaxis} and Y is {yaxis}
        </div>
    )
}