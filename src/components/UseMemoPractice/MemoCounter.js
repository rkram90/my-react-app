import React, { useMemo, useState } from 'react';

function MemoCounter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const oddOrEven = useMemo(() => {
    let i = 0;
    while (i < 2000) {
      console.log(i);
      i++;
    }
    return counterA % 2 === 0 ? 'Even number' : 'Odd number'
  }, [counterA])

  const incrementA = () => {
    console.log('incrementA called');
    setCounterA(counterA + 1);
  }

  const incrementB = () => {
    console.log('incrementB called');
    setCounterB(counterB + 1);
  }

  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    width: '60%',
    margin: '0 auto',
    textAlign: 'center'
  }

  return (
    <div style={containerStyle}>
      <h1>Memo Practice</h1>
      <hr />
      <section>
        <p>Counter A is: {counterA} and it is {oddOrEven}</p>
        <button onClick={incrementA}>Increase Counter A</button>
      </section>
      <section>
        <p>Counter B is: {counterB}</p>
        <button onClick={incrementB}>Increase Counter B</button>
      </section>
    </div>
  );
}

export default MemoCounter;