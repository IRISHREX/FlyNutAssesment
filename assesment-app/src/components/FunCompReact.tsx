import React, { useState } from 'react';

const FunCompReact: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Click Counter With Type Script</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default FunCompReact;
