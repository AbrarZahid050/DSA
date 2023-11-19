import { useState, memo } from "react";

const First = ({ test, handler }) => {
  const [count, setCount] = useState(0);

  console.log("First...");
  return (
    <div>
      <p>First: {test}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
      <p>{count}</p>
    </div>
  );
};

export default memo(First);
