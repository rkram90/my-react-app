import { useState, useEffect } from "react";


export default function Counter(){

    const [ count, setCount] = useState(0);

    const [ name, setName ] = useState('');

    useEffect(() => {
        document.title = 'button click '+ count + ' times';
        console.log('title updated function called');
    },
    [count]
    );

    const increment = () =>{
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(count - 1)
    }


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

            <hr></hr>
            <p>
                <input 
                type="text"
                id="textInput"
                value={name} 
                onChange={(e) => setName(e.target.value) } 
                />
                typing: {name}
            </p>

        </div>
    );
}