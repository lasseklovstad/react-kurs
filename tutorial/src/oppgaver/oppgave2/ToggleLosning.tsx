import { useState } from "react";

const useToggle = (initialState = false) => {
  const [on, setOn] = useState(initialState);
  const handleToggle = () => setOn(!on);
  return [on, handleToggle] as const;
};

export const Toggle = () => {
  const [on, toggle] = useToggle();
  return (
    <>
      <div>{on ? "On" : "Off"}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};
