import React, { useContext } from 'react';
import { counterContext } from '../../App';

function ComponentA() {
    const { dispatcher } = useContext(counterContext);
    return (
        <div>
            ComponentA
            <button onClick={() => dispatcher({ type: 'increament' })}>Increment</button>
            <button onClick={() => dispatcher({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatcher({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default ComponentA;