import { useState } from "react";

/*
Oppgave 2: Lag en gjennbrukbar hook som heter useToggle og refakturer denne komponenten til å bruke den hooken.
 */

export const Toggle = () => {
  const [on, setOn] = useState(false);
  return (
    <>
      <div>{on ? "On" : "Off"}</div>
      <button onClick={() => setOn(!on)}>Toggle</button>
    </>
  );
};
