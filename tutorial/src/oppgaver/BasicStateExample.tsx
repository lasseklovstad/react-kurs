import { useState } from "react";

export const BasicStateExample = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <div>{on ? "On" : "Off"}</div>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </>
  );
};
