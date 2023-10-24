import React, { useContext } from 'react';
import { counterContext } from '../../App';

function ComponentY() {
    const { dispatcher } = useContext(counterContext);
    return (
        <div>
            ComponentY
            <button onClick={() => dispatcher({ type: 'increament' })}>Increment</button>
            <button onClick={() => dispatcher({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatcher({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default ComponentY;