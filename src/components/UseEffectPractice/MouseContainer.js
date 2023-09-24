import React, { useState } from "react";
import DisplayXYAxis from "./DisplayXYAxis";

export default function MouseContainer() {
    const [display, setDisplay] = useState(true);
    console.log(display);
    return (
        <div>
            <h4>Show hide the other react component</h4>
            <button onClick={(e) => { setDisplay(!display)}}>Show Mouse Co-ordinates</button>
            <hr></hr>
            {display? (
                <div>
                    <DisplayXYAxis></DisplayXYAxis>
                </div>
            ) : (
                <p>
                    DisplayXYAxis removed from DOM
                </p>
            )}
        </div>
    )


}