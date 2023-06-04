import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = 'This is the data to be passed';

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={data} />
    </div>
  );
};

export default ParentComponent;
