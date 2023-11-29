import React, { useCallback, useState } from 'react';
import Message from './Component/Message';

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  console.log("app rendering");

  const HandleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
    {toggle? 'On' : 'Off'}
    <button onClick={() => {setToggle(!toggle);
    }} 
    >
    Toggle</button>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment
      </button>
      <Message numberOfMessage={count} 
      onHandleIncrement={HandleIncrementMessage} />
    </div>
  );
};

export default App;

