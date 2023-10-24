import React from 'react';

function CounterComponent({ text, count }) {
  console.log('Rendering ' + text)
  return (
    <div>
      <p>{text} count is {count}</p>
    </div>
  );
}

export default React.memo(CounterComponent);