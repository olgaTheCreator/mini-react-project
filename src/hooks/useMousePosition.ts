import { useEffect, useState } from "react";

export interface Coords {
  x: number;
  y: number;
  scale: number;
}
const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0, scale: 1 });
  const [moving, setMoving] = useState(false);

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
  return { coords, moving };
};

export default useMousePosition;
