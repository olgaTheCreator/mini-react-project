import { useState } from "react";

export interface Toggle {
  rotation: boolean;
  iconSize: boolean;
  inactivityTimer: boolean;
}

const defaultToggle = {
  rotation: true,
  iconSize: true,
  inactivityTimer: true,
};

const useToggle = () => {
  const [toggle, setToggle] = useState(defaultToggle);
  return { toggle, setToggle };
};

export default useToggle;
