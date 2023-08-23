import React from "react";
import { Toggle } from "../../hooks/useToggle";

interface TextDisplayPresProps {
  toggle: Toggle;
  timePassed: number;
}
export const TextDisplayPres = (props: TextDisplayPresProps) => {
  const { toggle, timePassed } = props;
  return (
    <>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {toggle.inactivityTimer && <p>{timePassed}ms</p>}
    </>
  );
};
