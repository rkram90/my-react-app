import React, { useReducer } from 'react';

const initialCount = {
    counterA: 0
};

const reducer = (state, action)=> {
    switch(action.type){
        case 'increament':
            return { ...state, counterA : state.counterA + (action.value ? action.value : 1)};
        case 'decrement':
            return { ...state, counterA : state.counterA - (action.value ? action.value : 1)};
        case 'reset':
            return initialCount;
        default:
            return state;
    }
}

function CounterWithReducer() {
    const [count, dispatcher] = useReducer(reducer, initialCount);
  return (
    <div>
      <p>{ count.counterA }</p>
      <hr/>
      <button onClick={ () => dispatcher({ type:'increament'})}>Increment</button>
      <button onClick={ () => dispatcher({ type:'increament', value: 2})}>Increment by 2</button>
      <button onClick={ () => dispatcher({ type: 'decrement'})}>Decrement</button>
      <button onClick={ () => dispatcher({ type: 'decrement', value: 2})}>Decrement by 2</button>
      <button onClick={ () => dispatcher({ type: 'reset'})}>Reset</button>
    </div>
  );
}

export default CounterWithReducer;