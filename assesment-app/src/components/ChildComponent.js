import React from 'react';

const ChildComponent = ({ data }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Data from Parent: {data}</p>
    </div>
  );
};

export default ChildComponent;
