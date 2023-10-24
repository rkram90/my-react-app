import React, { useContext } from 'react';
import { counterContext } from '../../App';

function ComponentX() {
    const { dispatcher } = useContext(counterContext);
    return (
        <div>
            ComponentX
            <button onClick={() => dispatcher({ type: 'increament' })}>Increment</button>
            <button onClick={() => dispatcher({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatcher({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default ComponentX;