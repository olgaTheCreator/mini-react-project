import React, { useState } from "react";
import { Toggle } from "../../hooks/useToggle";
import { SidebarPres } from "./SidebarPres";

interface SidebarContainerProps {
  toggle: Toggle;
  setToggle: React.Dispatch<React.SetStateAction<Toggle>>;
}

export const SidebarContainer = (props: SidebarContainerProps) => {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const { toggle, setToggle } = props;

  const handleToggleRotation = () => {
    setToggle((prevToggle) => ({ ...prevToggle, rotation: !toggle.rotation }));
  };

  const handleToggleIconSize = () => {
    setToggle((prevToggle) => ({ ...prevToggle, iconSize: !toggle.iconSize }));
  };

  const handleToggleInactivity = () => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      inactivityTimer: !toggle.inactivityTimer,
    }));
  };

  const handleClick = () => {
    setVisibleSidebar(!visibleSidebar);
  };
  return (
    <SidebarPres
      toggle={toggle}
      visibleSidebar={visibleSidebar}
      handleToggleIconSize={handleToggleIconSize}
      handleToggleInactivity={handleToggleInactivity}
      handleToggleRotation={handleToggleRotation}
      handleClick={handleClick}
    />
  );
};
