import React, { useState, useEffect, useCallback, useContext } from 'react';
import MyContextProvider, { MyContext } from './MyContextProvider';

const HookExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Code to run after every render
    console.log('Component rendered');
  }, []);

  const handleClick = useCallback(() => {
    // Function to be memoized
    setCount(count + 1);
  }, [count]);

  const value = useContext(MyContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <p>{value}</p>
    </div>
  );
};

export default HookExample;
