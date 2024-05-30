import React, { useState } from 'react';

const Counter = (Oldcomponent) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    return (
      <Oldcomponent
        {...props}
        count={count}
        increment={() => setCount(count + 1)}
      />
    );
  };
};

export default Counter;
