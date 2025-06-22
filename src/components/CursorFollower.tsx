// src/components/CursorFollower.tsx
import { useEffect, useState } from 'react';

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-linear"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    />
  );
};
