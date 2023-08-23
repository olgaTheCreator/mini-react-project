import React from "react";
import "./Sidebar.css";
import { Toggle } from "../../hooks/useToggle";

interface SidebarPresProps {
  toggle: Toggle;
  handleToggleRotation: () => void;
  handleToggleIconSize: () => void;
  handleToggleInactivity: () => void;
  handleClick: () => void;
  visibleSidebar: boolean;
}

export const SidebarPres = (props: SidebarPresProps) => {
  const {
    toggle,
    handleToggleIconSize,
    handleToggleInactivity,
    handleToggleRotation,
    handleClick,
    visibleSidebar,
  } = props;

  return (
    <>
      {" "}
      <button className="sidebar_button" onClick={handleClick}>
        {visibleSidebar ? (
          <span className="material-symbols-outlined icon_close">close</span>
        ) : (
          <span className="material-symbols-outlined icon_open">menu</span>
        )}
      </button>
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
          Rotation of Icon
        </label>
        <label>
          <input
            type="checkbox"
            defaultChecked={toggle.iconSize}
            onChange={handleToggleIconSize}
          />
          Icon Size Changing with Moving Cursor
        </label>
        <label>
          <input
            type="checkbox"
            defaultChecked={toggle.inactivityTimer}
            onChange={handleToggleInactivity}
          />
          Inactivity Timer
        </label>
      </div>
    </>
  );
};
