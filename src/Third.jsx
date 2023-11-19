import { useState, useMemo } from "react";
import { expensiveFunc } from "./expensive";

const Third = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const expVal = useMemo(() => expensiveFunc(count), [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleCount2Click = () => {
    setCount2((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click: {count}</button>
      <button onClick={handleCount2Click}>Click2: {count2}</button>
      <p>value: {expVal}</p>
    </>
  );
};

export default Third;
