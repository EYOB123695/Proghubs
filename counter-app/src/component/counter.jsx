import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

const Counter = () => {
  // State for the counter
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p className="count-value">{count}</p>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
