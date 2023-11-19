import { memo } from "react";

const Second = () => {
  console.log("second...");
  return <div>Second</div>;
};

export default memo(Second);
