import React from "react";
import logo from "../../logo.svg";
import { Toggle } from "../../hooks/useToggle";
import { Coords } from "../../hooks/useMousePosition";

interface LogoPresProps {
  toggle: Toggle;
  coords: Coords;
  turningRight: boolean;
  handleTurning: () => void;
}

export const LogoPres = (props: LogoPresProps) => {
  const { toggle, coords, turningRight, handleTurning } = props;

  return (
    <div
      className={`logo_wrapper ${turningRight ? "paused" : "playing"} `}
      onClick={handleTurning}
    >
      <img
        src={logo}
        style={
          toggle.iconSize
            ? { scale: `${coords.scale}` }
            : { scale: "1", transition: "scale 0.2s linear" }
        }
        className="App-logo"
        alt="logo"
      />
    </div>
  );
};
