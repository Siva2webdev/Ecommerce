import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } 
  };

  return (
    <div className="counter">
      <button onClick={decrement}>Decrement</button>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
