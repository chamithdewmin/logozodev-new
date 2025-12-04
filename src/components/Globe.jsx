import React, { useEffect, useRef } from 'react';
import './Globe.css';

const Globe = ({ 
  scale = 1,
  baseColor = [0.8, 1, 0.2],
  markerColor = [0, 0, 0],
  glowColor = [0.8, 1, 0.3]
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create a simple animated globe using CSS
    const globe = document.createElement('div');
    globe.className = 'globe-sphere';
    globe.style.setProperty('--scale', scale);
    globe.style.setProperty('--base-color', `rgb(${baseColor[0] * 255}, ${baseColor[1] * 255}, ${baseColor[2] * 255})`);
    globe.style.setProperty('--glow-color', `rgb(${glowColor[0] * 255}, ${glowColor[1] * 255}, ${glowColor[2] * 255})`);
    
    container.appendChild(globe);

    return () => {
      if (container.contains(globe)) {
        container.removeChild(globe);
      }
    };
  }, [scale, baseColor, glowColor]);

  return <div ref={containerRef} className="globe-wrapper" />;
};

export default Globe;

