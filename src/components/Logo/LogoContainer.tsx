import React, { useEffect, useState } from "react";
import { Coords } from "../../hooks/useMousePosition";
import { Toggle } from "../../hooks/useToggle";
import { LogoPres } from "./LogoPres";

interface LogoContainerProps {
  toggle: Toggle;
  coords: Coords;
}

export const LogoContainer = (props: LogoContainerProps) => {
  const { toggle, coords } = props;
  const [turningRight, setTurningRight] = useState(true);

  const handleTurning = () => {
    toggle.rotation && setTurningRight(!turningRight);
  };

  useEffect(() => {
    if (!toggle.rotation) setTurningRight(true);
  }, [toggle.rotation]);

  return (
    <LogoPres
      turningRight={turningRight}
      handleTurning={handleTurning}
      toggle={toggle}
      coords={coords}
    />
  );
};
