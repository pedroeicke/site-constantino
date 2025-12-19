
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, light = false }) => {
  const blueColor = light ? "#ffffff" : "#1e3a8a";
  const orangeColor = light ? "#fcd34d" : "#9a3412"; // Amarelo/Dourado se for light, Laranja queimado se for dark
  const grayColor = light ? "#e5e7eb" : "#374151";

  return (
    <div className={`flex flex-row items-center gap-3 ${className}`}>
      {/* SVG Container - Fixed height relative to parent */}
      <div className="h-full py-1">
        <svg
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto drop-shadow-sm"
        >
          {/* Roof Left - Wrench Style */}
          <path
            d="M40 70L95 20L105 30L60 70H40Z"
            fill={blueColor}
          />
          <path
            d="M85 15L100 30L110 20L95 5L85 15Z"
            fill={blueColor}
          />
          
          {/* Roof Right - Hammer Style */}
          <path
            d="M105 30L160 70H140L105 40V30Z"
            fill={orangeColor}
          />
          <path
            d="M95 20L115 5L135 25L115 40L95 20Z"
            fill={orangeColor}
          />

          {/* House Walls */}
          <path
            d="M50 70V130H85V110H115V130H150V70H50Z"
            fill="none"
            stroke={grayColor}
            strokeWidth="6"
          />

          {/* Gear in the center */}
          <circle cx="100" cy="75" r="12" fill={blueColor} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x="96"
              y="58"
              width="8"
              height="8"
              fill={blueColor}
              transform={`rotate(${angle}, 100, 75)`}
            />
          ))}
          <circle cx="100" cy="75" r="6" fill="white" />

          {/* Paintbrush on the left */}
          <rect x="65" cy="85" width="15" height="15" fill={orangeColor} />
          <path d="M65 100V120H80V100H65Z" fill={grayColor} />
          <circle cx="72.5" cy="120" r="3" fill={grayColor} />

          {/* Level at the bottom */}
          <rect x="90" y="115" width="45" height="10" fill={orangeColor} />
          <circle cx="112.5" cy="120" r="3" fill="white" stroke={grayColor} strokeWidth="1" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center font-black text-lg md:text-2xl tracking-tighter uppercase leading-[0.8] md:leading-[0.8]">
          <span className={`${light ? 'text-white' : 'text-blue-900'}`}>LEPRE</span>
          <span className={`${light ? 'text-blue-200' : 'text-gray-600'}`}>REPAROS</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
