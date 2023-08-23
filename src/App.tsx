import React, { useEffect, useState } from "react";
import "./App.css";

import { LogoContainer } from "./components/Logo/LogoContainer";
import { SidebarContainer } from "./components/Sidebar/SidebarContainer";
import { TextDisplayPres } from "./components/TextDisplay/TextDisplayPres";
import useMousePosition from "./hooks/useMousePosition";
import useToggle from "./hooks/useToggle";

function App() {
  const [timePassed, setTimePassed] = useState(0);
  const [inside, setInside] = useState(false);

  const { toggle, setToggle } = useToggle();
  const { moving, coords } = useMousePosition();

  const handleMouseEnter = () => {
    setInside(true);
  };
  const handleMouseLeave = () => {
    setInside(false);
  };

  useEffect(() => {
    const initialUnixTime = Date.now();
    const initialTimePassed = timePassed;
    const intervalId = setInterval(() => {
      if (!moving && inside && toggle.inactivityTimer)
        setTimePassed(
          () => initialTimePassed + Math.round(Date.now() - initialUnixTime)
        );
    }, 100);
    if (!toggle.inactivityTimer) {
      clearInterval(intervalId);
      setTimePassed(0);
    }
    return () => clearInterval(intervalId);
  }, [moving, inside, toggle.inactivityTimer]);

  return (
    <div
      className="App"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <header className="App-header">
        <LogoContainer toggle={toggle} coords={coords} />
        <TextDisplayPres toggle={toggle} timePassed={timePassed} />
      </header>
      <SidebarContainer toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default App;
