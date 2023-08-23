import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./Sidebar";

function App() {
  const [turningRight, setTurning] = useState(true);
  const [coords, setCoords] = useState({ x: 0, y: 0, scale: 1 });
  const [moving, setMoving] = useState(false);
  const [timePassed, setTimePassed] = useState(0);
  const [inside, setInside] = useState(false);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [toggle, setToggle] = useState({
    rotation: true,
    iconSize: true,
    inactivityTimer: true,
  });

  const handleTurning = () => toggle.rotation && setTurning(!turningRight);

  const handleMouseEnter = () => {
    setInside(true);
  };
  const handleMouseLeave = () => {
    setInside(false);
  };
  const handleClick = () => {
    setVisibleSidebar(!visibleSidebar);
    console.log(visibleSidebar);
  };
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleWindowMouseMove = (event: MouseEvent) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMoving(false);
      }, 50);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = event.clientX;
      const y = event.clientY;
      setCoords({
        x: x,
        y: y,
        scale: Number((event.clientX / w + event.clientY / h + 0.1).toFixed(2)),
      });
      setMoving(true);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const initialUnixTime = Date.now();
    const intervalId = setInterval(() => {
      if (moving == false && inside == true)
        setTimePassed(
          () => timePassed + Math.round(Date.now() - initialUnixTime)
        );
    }, 100);
    return () => clearInterval(intervalId);
  }, [moving]);

  return (
    <div
      className="App"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <header className="App-header">
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
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* <p>
          (x:{coords.x}, y:{coords.y}, scale:{coords.scale})
        </p> */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {toggle.inactivityTimer && <p>{timePassed}ms</p>}
      </header>
      <button className="sidebar_button" onClick={handleClick}>
        {visibleSidebar ? "Close" : "Open"}
      </button>
      <Sidebar
        visibleSidebar={visibleSidebar}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;
