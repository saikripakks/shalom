import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for cursor movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOver = (e) => {
      // Check if we are hovering over an interactive element
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', mouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', mouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Small dot that perfectly follows the mouse (no delay) */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: mousePosition.x - 4,
          translateY: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1
        }}
      />
      {/* Larger animated ring with spring physics */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid var(--color-accent)',
          pointerEvents: 'none',
          zIndex: 9998,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(205, 156, 86, 0.1)' : 'transparent',
          mixBlendMode: 'difference' // makes it pop on all backgrounds
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          borderWidth: isHovering ? '1px' : '2px'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
