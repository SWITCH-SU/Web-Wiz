import React, { useEffect, useRef } from 'react';

const StarfieldCanvas = ({ currentSectionIndex, totalSections }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
      }));
    };

    const drawStars = (hue) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = `hsl(${hue}, 100%, 80%)`;
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    let animationId;
    const animate = () => {
      // Hue changes with section index
      const hue = (currentSectionIndex / totalSections) * 360;
      drawStars(hue);
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createStars();
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [currentSectionIndex, totalSections]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarfieldCanvas;
