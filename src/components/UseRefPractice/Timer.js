import React, { useEffect, useRef, useState } from 'react';

function Timer() {
    const [timer, setTimer] = useState(0);
    const refInterval = useRef();

    useEffect(() => {
        refInterval.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000)

        return () => {
            clearInterval(refInterval.current);
        }
    }, [])

    return (
        <div>
            <p>Timer : {timer}</p>
            <button onClick={() => clearInterval(refInterval.current)}>Stop Timer</button>
        </div>
    );
}

export default Timer;