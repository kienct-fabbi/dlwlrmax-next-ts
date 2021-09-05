import { useEffect, useState } from 'react';
import { MOUSE_POSITION } from '../util/Interfaces';
export default function useMousePosition(): MOUSE_POSITION {
  const [mousePos, setMousePosition] = useState<MOUSE_POSITION>({
    x: 0,
    y: 0
  });
  const moveHandler = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    document.body.addEventListener('mousemove', moveHandler);
    return () => document.body.removeEventListener('mousemove', moveHandler);
  }, []);
  return mousePos;
}
