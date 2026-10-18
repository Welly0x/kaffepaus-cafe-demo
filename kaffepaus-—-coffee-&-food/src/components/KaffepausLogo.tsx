import React from 'react';

interface KaffepausLogoProps {
  variant?: 'full' | 'horizontal' | 'mark';
  theme?: 'dark' | 'light';
  className?: string;
  size?: number;
}

export const KaffepausLogo: React.FC<KaffepausLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 64,
}) => {
  // Light theme: Forest Green logo on light/cream background (#173A2F)
  // Dark theme: Warm Cream logo on dark forest background (#F7F3EA / #EAE4D8)
  const strokeColor = theme === 'dark' ? '#F7F3EA' : '#173A2F';
  const textColor = theme === 'dark' ? '#F7F3EA' : '#173A2F';
  const subtextColor = theme === 'dark' ? '#D8D0C3' : '#2A4D42';

  const emblemSvg = (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="KAFFEPAUS emblem"
    >
      {/* Outer Circle Frame (with opening at top right for steam plumes) */}
      <path
        d="M 160 85 A 72 72 0 1 1 125 36"
        stroke={strokeColor}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Hanging Scandinavian Pendant Lamps */}
      {/* Lamp 1 (left) */}
      <line x1="88" y1="35" x2="88" y2="70" stroke={strokeColor} strokeWidth="2.5" />
      <polygon points="76,82 100,82 88,70" stroke={strokeColor} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <circle cx="88" cy="84" r="1.5" fill={strokeColor} />

      {/* Lamp 2 (middle-left) */}
      <line x1="108" y1="35" x2="108" y2="85" stroke={strokeColor} strokeWidth="2.5" />
      <polygon points="98,96 118,96 108,85" stroke={strokeColor} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <circle cx="108" cy="98" r="1.5" fill={strokeColor} />

      {/* Cake Slice (Left side) */}
      {/* 3 small dots on top */}
      <circle cx="82" cy="96" r="2" fill={strokeColor} />
      <circle cx="92" cy="100" r="2" fill={strokeColor} />
      <circle cx="102" cy="104" r="2" fill={strokeColor} />

      {/* Cake wedge outline */}
      <path
        d="M 68 112 L 108 118 L 108 152 L 68 140 Z"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Cake layers */}
      <line x1="68" y1="121" x2="108" y2="129" stroke={strokeColor} strokeWidth="2.5" />
      <line x1="68" y1="131" x2="108" y2="140" stroke={strokeColor} strokeWidth="2.5" />

      {/* Coffee Cup and Saucer (Center-Right) */}
      {/* Saucer base */}
      <path
        d="M 112 144 C 124 150 148 150 160 144"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Cup rim ellipse */}
      <ellipse
        cx="136"
        cy="114"
        rx="26"
        ry="7"
        stroke={strokeColor}
        strokeWidth="3.5"
        fill="none"
      />

      {/* Cup body bowl */}
      <path
        d="M 112 116 C 114 136 124 144 136 144 C 148 144 158 136 160 116"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Cup handle */}
      <path
        d="M 158 120 C 168 118 174 125 171 133 C 168 139 160 137 154 134"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Steam Spirals Rising from Cup */}
      {/* Left steam curl */}
      <path
        d="M 125 104 C 122 96 128 86 136 88 C 142 90 142 98 135 100 C 130 102 124 97 125 90"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Center large steam curl */}
      <path
        d="M 137 100 C 132 88 132 72 143 65 C 153 58 162 67 157 78 C 152 86 141 85 141 77 C 141 71 146 68 151 72"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right steam curl */}
      <path
        d="M 149 104 C 153 96 161 95 165 99 C 168 103 165 108 160 109 C 155 109 152 104 153 99"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{emblemSvg}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {emblemSvg}
        <div className="flex flex-col text-left">
          <span
            className="font-serif text-xl sm:text-2xl font-bold tracking-wider leading-none"
            style={{ color: textColor }}
          >
            KAFFEPAUS
          </span>
          <span
            className="text-[9px] sm:text-[10px] font-sans font-medium tracking-[0.25em] uppercase mt-1 leading-none"
            style={{ color: subtextColor }}
          >
            COFFEE AND FOOD
          </span>
        </div>
      </div>
    );
  }

  // Full stacked emblem
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {emblemSvg}
      <span
        className="font-serif text-2xl sm:text-3xl font-bold tracking-wider mt-2 leading-tight"
        style={{ color: textColor }}
      >
        KAFFEPAUS
      </span>
      <span
        className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase mt-1"
        style={{ color: subtextColor }}
      >
        COFFEE AND FOOD
      </span>
    </div>
  );
};
