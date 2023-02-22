import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={addOne}>+</button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
