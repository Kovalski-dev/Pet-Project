import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.button}>
      <button onClick={addOne}>+</button>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
