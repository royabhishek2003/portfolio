import { useRef, useState } from "react";

const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    // Convert to rotation degrees (max 15 degrees)
    const rotateX = yPct * -20;
    const rotateY = xPct * 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-200 ease-out transform-gpu perspective-1000 ${className}`}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` 
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transformStyle: "preserve-3d",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        zIndex: isHovered ? 50 : 1,
      }}
    >
      {/* Dynamic reflections based on light angle */}
      {isHovered && (
        <div 
          className="absolute inset-0 z-50 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(
              800px circle at ${rotation.y > 0 ? '100%' : '0%'} ${rotation.x > 0 ? '100%' : '0%'}, 
              rgba(255,255,255,0.06),
              transparent 40%
            )`
          }}
        />
      )}
      
      {/* Inner wrapper moves opposite to rotation slightly for deep 3D effect */}
      <div 
        className="w-full h-full"
        style={{
          transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
          transition: "transform 0.3s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
