import React, { useRef, useState, useEffect } from 'react';

interface ResponsiveCanvasProps {
  designWidth?: number;
  designHeight: number;
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveCanvas({
  designWidth = 1480,
  designHeight,
  children,
  className = ''
}: ResponsiveCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return Math.min(1, window.innerWidth / designWidth);
    }
    return 1;
  });

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth || window.innerWidth;
        const newScale = Math.min(1, availableWidth / designWidth);
        setScale(newScale);
      }
    };

    updateScale();

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [designWidth]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative overflow-hidden ${className}`}
      style={{
        width: '100%',
        maxWidth: `${designWidth}px`,
        height: `${designHeight * scale}px`,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          width: `${designWidth}px`,
          height: `${designHeight}px`,
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top left'
        }}
      >
        {children}
      </div>
    </div>
  );
}
