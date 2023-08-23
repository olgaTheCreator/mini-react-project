import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  visibleSidebar: boolean;
  toggle: {
    rotation: boolean;
    iconSize: boolean;
    inactivityTimer: boolean;
  };
  setToggle: React.Dispatch<
    React.SetStateAction<{
      rotation: boolean;
      iconSize: boolean;
      inactivityTimer: boolean;
    }>
  >;
}

export const Sidebar = (props: SidebarProps) => {
  const { visibleSidebar, toggle, setToggle } = props;
  const handleToggleRotation = () => {
    setToggle({ ...toggle, rotation: !toggle.rotation });
  };

  const handleToggleIconSize = () => {
    setToggle({ ...toggle, iconSize: !toggle.iconSize });
  };

  const handleToggleInactivity = () => {
    setToggle({ ...toggle, inactivityTimer: !toggle.inactivityTimer });
  };
  return (
    <>
      <div
        className={`sidebar ${
          visibleSidebar ? "sidebar_show" : "sidebar_hide"
        }`}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={toggle.rotation}
            onChange={handleToggleRotation}
          />
          Toggle Rotation
        </label>
        <label>
          <input
            type="checkbox"
            defaultChecked={toggle.iconSize}
            onChange={handleToggleIconSize}
          />
          Toggle Icon Size with Cursor
        </label>
        <label>
          <input
            type="checkbox"
            defaultChecked={toggle.inactivityTimer}
            onChange={handleToggleInactivity}
          />
          Toggle Inactivity Timer
        </label>
      </div>
    </>
  );
};
