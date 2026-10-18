import React, { useId } from 'react';

export interface BotanicalProps {
  className?: string;
  color?: string;
  opacity?: number;
  flip?: boolean;
  side?: 'left' | 'right' | string;
}

/**
 * Archetype 1: BotanicalSlenderBranch
 * An elegant, tall vertical olive branch with slender pointed leaves,
 * soft sage-green watercolor washes, fine pencil midribs, and delicate lateral veins.
 * Designed to neatly frame section content along the left or right screen margins.
 */
export const BotanicalSlenderBranch: React.FC<BotanicalProps> = ({
  className = '',
  opacity = 0.38,
  flip = false,
  side = 'left',
}) => {
  const rawId = useId();
  const id = rawId.replace(/:/g, '');
  const isFlipped = flip || side === 'right';

  return (
    <svg
      viewBox="0 0 200 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className} ${isFlipped ? '-scale-x-100' : ''}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        {/* Stem: Soft olive to pale pencil sage */}
        <linearGradient id={`${id}-stem`} x1="0" y1="1" x2="0.2" y2="0">
          <stop offset="0%" stopColor="#5A7156" />
          <stop offset="50%" stopColor="#758F71" />
          <stop offset="100%" stopColor="#9AB296" />
        </linearGradient>

        {/* Primary Soft Sage Watercolor Wash */}
        <linearGradient id={`${id}-wash-1`} x1="0%" y1="100%" x2="80%" y2="0%">
          <stop offset="0%" stopColor="#63805F" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#819E7D" stopOpacity="0.75" />
          <stop offset="80%" stopColor="#A6C2A2" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#CDE0CB" stopOpacity="0.5" />
        </linearGradient>

        {/* Secondary Delicate Sage Wash (Translucent Highlight) */}
        <linearGradient id={`${id}-wash-2`} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#708D6C" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#90AD8D" stopOpacity="0.7" />
          <stop offset="85%" stopColor="#B6CEB3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D9E8D6" stopOpacity="0.45" />
        </linearGradient>

        {/* Subtle watercolor pooling shadow along the midrib */}
        <linearGradient id={`${id}-pool`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3E543B" stopOpacity="0.28" />
          <stop offset="60%" stopColor="#587355" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#819E7D" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main graceful undulating pencil stem */}
      <path
        d="M 68 572 Q 82 460 96 350 T 108 170 Q 112 90 106 20"
        stroke={`url(#${id}-stem)`}
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Delicate offshoot twiglets */}
      <path d="M 80 495 Q 60 460 40 430" stroke={`url(#${id}-stem)`} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 88 430 Q 118 402 146 376" stroke={`url(#${id}-stem)`} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M 95 345 Q 70 315 50 274" stroke={`url(#${id}-stem)`} strokeWidth="0.85" strokeLinecap="round" />
      <path d="M 101 278 Q 132 250 158 224" stroke={`url(#${id}-stem)`} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M 105 200 Q 84 168 68 136" stroke={`url(#${id}-stem)`} strokeWidth="0.75" strokeLinecap="round" />
      <path d="M 107 132 Q 130 102 144 72" stroke={`url(#${id}-stem)`} strokeWidth="0.7" strokeLinecap="round" />

      {/* ================= DETAILED LEAVES ================= */}

      {/* Leaf 1: Lower left terminal leaf */}
      <g>
        <path
          d="M 40 430 C 26 412 22 384 38 368 C 52 376 54 406 40 430 Z"
          fill={`url(#${id}-wash-1)`}
          stroke="#4C6447"
          strokeWidth="0.5"
        />
        <path d="M 40 430 C 32 414 28 392 38 368 C 42 390 46 412 40 430 Z" fill={`url(#${id}-pool)`} />
        <path d="M 40 430 Q 34 398 38 368" stroke="#3F563B" strokeWidth="0.65" strokeLinecap="round" />
        <path d="M 37 408 Q 30 400 27 396" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
        <path d="M 38 390 Q 45 385 47 380" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* Leaf 2: Lower left side leaf */}
      <g>
        <path
          d="M 60 462 C 45 452 36 436 45 424 C 56 432 63 446 60 462 Z"
          fill={`url(#${id}-wash-2)`}
          stroke="#4C6447"
          strokeWidth="0.45"
        />
        <path d="M 60 462 Q 50 444 45 424" stroke="#3F563B" strokeWidth="0.55" />
        <path d="M 54 446 Q 47 442 42 440" stroke="#4C6447" strokeWidth="0.35" opacity="0.5" />
      </g>

      {/* Leaf 3: Lower main stem leaf (Left) */}
      <g>
        <path
          d="M 83 518 C 64 502 56 474 74 460 C 89 473 92 499 83 518 Z"
          fill={`url(#${id}-wash-1)`}
          stroke="#4C6447"
          strokeWidth="0.5"
        />
        <path d="M 83 518 C 72 503 66 484 74 460 C 80 481 85 502 83 518 Z" fill={`url(#${id}-pool)`} />
        <path d="M 83 518 Q 76 488 74 460" stroke="#3F563B" strokeWidth="0.65" />
        <path d="M 79 496 Q 70 489 65 484" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
        <path d="M 77 476 Q 84 471 87 466" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* Leaf 4: Lower right terminal leaf */}
      <g>
        <path
          d="M 146 376 C 162 360 172 338 164 324 C 150 332 142 358 146 376 Z"
          fill={`url(#${id}-wash-2)`}
          stroke="#4C6447"
          strokeWidth="0.5"
        />
        <path d="M 146 376 C 156 360 164 344 164 324 C 156 342 150 360 146 376 Z" fill={`url(#${id}-pool)`} />
        <path d="M 146 376 Q 156 348 164 324" stroke="#3F563B" strokeWidth="0.65" />
        <path d="M 152 360 Q 160 355 164 352" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
        <path d="M 157 342 Q 150 336 148 333" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* Leaf 5: Lower right side leaf */}
      <g>
        <path
          d="M 115 410 C 130 402 142 410 137 424 C 124 423 116 416 115 410 Z"
          fill={`url(#${id}-wash-1)`}
          stroke="#4C6447"
          strokeWidth="0.45"
        />
        <path d="M 115 410 Q 128 412 137 424" stroke="#3F563B" strokeWidth="0.55" />
      </g>

      {/* Leaf 6: Mid left terminal leaf */}
      <g>
        <path
          d="M 50 274 C 36 256 32 230 46 218 C 60 228 62 254 50 274 Z"
          fill={`url(#${id}-wash-1)`}
          stroke="#4C6447"
          strokeWidth="0.5"
        />
        <path d="M 50 274 C 40 258 38 238 46 218 C 50 236 54 256 50 274 Z" fill={`url(#${id}-pool)`} />
        <path d="M 50 274 Q 45 246 46 218" stroke="#3F563B" strokeWidth="0.65" />
        <path d="M 48 254 Q 40 248 36 242" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
        <path d="M 47 236 Q 54 231 58 226" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* Leaf 7: Mid left side leaf */}
      <g>
        <path
          d="M 75 318 C 62 305 58 288 70 280 C 80 290 81 306 75 318 Z"
          fill={`url(#${id}-wash-2)`}
          stroke="#4C6447"
          strokeWidth="0.45"
        />
        <path d="M 75 318 Q 70 298 70 280" stroke="#3F563B" strokeWidth="0.55" />
      </g>

      {/* Leaf 8: Mid stem right leaf */}
      <g>
        <path
          d="M 98 358 C 117 345 130 355 125 372 C 110 375 99 368 98 358 Z"
          fill={`url(#${id}-wash-2)`}
          stroke="#4C6447"
          strokeWidth="0.45"
        />
        <path d="M 98 358 Q 115 358 125 372" stroke="#3F563B" strokeWidth="0.55" />
      </g>

      {/* Leaf 9: Mid right terminal leaf */}
      <g>
        <path
          d="M 158 224 C 174 210 182 188 172 176 C 160 185 154 208 158 224 Z"
          fill={`url(#${id}-wash-1)`}
          stroke="#4C6447"
          strokeWidth="0.5"
        />
        <path d="M 158 224 C 168 210 174 195 172 176 C 164 192 160 210 158 224 Z" fill={`url(#${id}-pool)`} />
        <path d="M 158 224 Q 168 198 172 176" stroke="#3F563B" strokeWidth="0.65" />
        <path d="M 164 206 Q 172 201 176 198" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
        <path d="M 167 190 Q 160 185 157 182" stroke="#4C6447" strokeWidth="0.4" opacity="0.6" />
      </g>

      {/* Leaf 10: Mid right side leaf */}
      <g>
        <path
          d="M 128 252 C 144 242 155 250 151 262 C 138 264 130 258 128 252 Z"
          fill={`url(#${id}-wash-2)`}
          stroke="#4C6447"
          strokeWidth="0.45"
        />
        <path d="M 128 252 Q 142 250 151 262" stroke="#3F563B" strokeWidth="0.55" />
      </g>

      {/* Leaf 11: Upper left terminal leaf */}
      <g>
        <path
          d="M 68 136 C 55 120 53 98 66 88 C 77 98 78 120 68 136 Z"
          fill={`url(#${id}-wash-1)`}
          stroke="#4C6447"
          strokeWidth="0.5"
        />
        <path d="M 68 136 C 60 122 58 106 66 88 C 71 103 72 122 68 136 Z" fill={`url(#${id}-pool)`} />
        <path d="M 68 136 Q 64 112 66 88" stroke="#3F563B" strokeWidth="0.6" />
        <path d="M 66 118 Q 58 113 55 109" stroke="#4C6447" strokeWidth="0.38" opacity="0.55" />
      </g>

      {/* Leaf 12: Upper left side leaf */}
      <g>
        <path
          d="M 88 170 C 76 158 73 144 84 137 C 92 147 94 160 88 170 Z"
          fill={`url(#${id}-wash-2)`}
          stroke="#4C6447"
          strokeWidth="0.45"
        />
        <path d="M 88 170 Q 84 153 84 137" stroke="#3F563B" strokeWidth="0.5" />
      </g>

      {/* Leaf 13: Upper right terminal leaf */}
      <g>
        <path
          d="M 144 72 C 156 58 162 40 153 30 C 143 38 138 58 144 72 Z"
          fill={`url(#${id}-wash-2)`}
          stroke="#4C6447"
          strokeWidth="0.5"
        />
        <path d="M 144 72 C 152 58 156 46 153 30 C 146 44 143 58 144 72 Z" fill={`url(#${id}-pool)`} />
        <path d="M 144 72 Q 151 50 153 30" stroke="#3F563B" strokeWidth="0.6" />
        <path d="M 148 56 Q 155 51 158 49" stroke="#4C6447" strokeWidth="0.38" opacity="0.55" />
      </g>

      {/* Leaf 14: Terminal apex leaf */}
      <g>
        <path
          d="M 106 20 C 102 7 110 2 112 10 C 113 15 109 17 106 20 Z"
          fill={`url(#${id}-wash-1)`}
          stroke="#4C6447"
          strokeWidth="0.4"
        />
        <path d="M 106 20 Q 109 10 112 10" stroke="#3F563B" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

/**
 * Archetype 2: BotanicalEucalyptusSprig
 * A varied botanical shape featuring graceful, gently rounded eucalyptus/silver-dollar
 * sage leaves with soft watercolor translucency and fine graphite pencil leaf outlines.
 * Offers visual variety from the slender olive branch.
 */
export const BotanicalEucalyptusSprig: React.FC<BotanicalProps> = ({
  className = '',
  opacity = 0.36,
  flip = false,
  side = 'right',
}) => {
  const rawId = useId();
  const id = rawId.replace(/:/g, '');
  const isFlipped = flip || side === 'left';

  return (
    <svg
      viewBox="0 0 190 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className} ${isFlipped ? '-scale-x-100' : ''}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-euc-stem`} x1="0" y1="1" x2="0.3" y2="0">
          <stop offset="0%" stopColor="#5E745A" />
          <stop offset="50%" stopColor="#7E967A" />
          <stop offset="100%" stopColor="#A2BA9E" />
        </linearGradient>

        <linearGradient id={`${id}-euc-leaf1`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#678363" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8BA687" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#BCD2BA" stopOpacity="0.5" />
        </linearGradient>

        <linearGradient id={`${id}-euc-leaf2`} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#718B6D" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#96AF92" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#C6D8C3" stopOpacity="0.45" />
        </linearGradient>

        <linearGradient id={`${id}-euc-pool`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3C5139" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6F8B6B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main arching stem */}
      <path
        d="M 125 530 Q 100 420 88 320 T 92 150 Q 98 75 110 18"
        stroke={`url(#${id}-euc-stem)`}
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      {/* Gentle pedicels / leaf stalks */}
      <path d="M 112 460 Q 132 445 146 432" stroke={`url(#${id}-euc-stem)`} strokeWidth="0.85" />
      <path d="M 96 395 Q 68 382 48 370" stroke={`url(#${id}-euc-stem)`} strokeWidth="0.85" />
      <path d="M 90 325 Q 116 308 135 292" stroke={`url(#${id}-euc-stem)`} strokeWidth="0.8" />
      <path d="M 88 250 Q 64 235 48 218" stroke={`url(#${id}-euc-stem)`} strokeWidth="0.75" />
      <path d="M 91 180 Q 115 162 130 144" stroke={`url(#${id}-euc-stem)`} strokeWidth="0.7" />
      <path d="M 97 115 Q 78 98 65 82" stroke={`url(#${id}-euc-stem)`} strokeWidth="0.65" />

      {/* Leaf 1: Lower right rounded leaf */}
      <g>
        <path
          d="M 146 432 C 168 424 178 398 165 382 C 148 375 132 398 146 432 Z"
          fill={`url(#${id}-euc-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.48"
        />
        <path d="M 146 432 C 158 422 165 406 165 382 C 154 394 144 412 146 432 Z" fill={`url(#${id}-euc-pool)`} />
        <path d="M 146 432 Q 158 405 165 382" stroke="#3D5338" strokeWidth="0.6" />
        <path d="M 152 414 Q 160 410 164 407" stroke="#4A6145" strokeWidth="0.38" opacity="0.55" />
        <path d="M 156 398 Q 150 392 147 388" stroke="#4A6145" strokeWidth="0.38" opacity="0.55" />
      </g>

      {/* Leaf 2: Lower left rounded leaf */}
      <g>
        <path
          d="M 48 370 C 30 360 22 334 38 318 C 55 324 62 350 48 370 Z"
          fill={`url(#${id}-euc-leaf2)`}
          stroke="#4A6145"
          strokeWidth="0.48"
        />
        <path d="M 48 370 C 38 358 32 342 38 318 C 44 334 50 354 48 370 Z" fill={`url(#${id}-euc-pool)`} />
        <path d="M 48 370 Q 38 344 38 318" stroke="#3D5338" strokeWidth="0.6" />
        <path d="M 44 350 Q 36 345 32 340" stroke="#4A6145" strokeWidth="0.38" opacity="0.55" />
        <path d="M 43 334 Q 50 330 54 326" stroke="#4A6145" strokeWidth="0.38" opacity="0.55" />
      </g>

      {/* Leaf 3: Mid right leaf */}
      <g>
        <path
          d="M 135 292 C 156 284 165 260 152 245 C 136 240 122 262 135 292 Z"
          fill={`url(#${id}-euc-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.48"
        />
        <path d="M 135 292 Q 146 268 152 245" stroke="#3D5338" strokeWidth="0.6" />
        <path d="M 142 276 Q 150 272 154 269" stroke="#4A6145" strokeWidth="0.38" opacity="0.55" />
      </g>

      {/* Leaf 4: Mid left leaf */}
      <g>
        <path
          d="M 48 218 C 32 208 26 186 40 172 C 55 178 60 200 48 218 Z"
          fill={`url(#${id}-euc-leaf2)`}
          stroke="#4A6145"
          strokeWidth="0.48"
        />
        <path d="M 48 218 Q 39 196 40 172" stroke="#3D5338" strokeWidth="0.58" />
        <path d="M 44 200 Q 36 195 33 191" stroke="#4A6145" strokeWidth="0.38" opacity="0.55" />
      </g>

      {/* Leaf 5: Upper right leaf */}
      <g>
        <path
          d="M 130 144 C 148 138 155 116 144 104 C 130 100 118 118 130 144 Z"
          fill={`url(#${id}-euc-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.45"
        />
        <path d="M 130 144 Q 139 124 144 104" stroke="#3D5338" strokeWidth="0.55" />
      </g>

      {/* Leaf 6: Upper left leaf */}
      <g>
        <path
          d="M 65 82 C 52 74 48 56 60 45 C 72 50 76 68 65 82 Z"
          fill={`url(#${id}-euc-leaf2)`}
          stroke="#4A6145"
          strokeWidth="0.45"
        />
        <path d="M 65 82 Q 58 64 60 45" stroke="#3D5338" strokeWidth="0.52" />
      </g>

      {/* Leaf 7: Terminal apex pair */}
      <g>
        <path
          d="M 110 18 C 104 6 114 2 118 8 C 120 14 115 16 110 18 Z"
          fill={`url(#${id}-euc-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.4"
        />
        <path d="M 110 18 Q 114 9 118 8" stroke="#3D5338" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

/**
 * Archetype 3: BotanicalCornerArch
 * Gentle curving corner framing vignette that hugs the top or bottom outer corners,
 * gracefully framing the content without invading the central layout.
 */
export const BotanicalCornerArch: React.FC<BotanicalProps> = ({
  className = '',
  opacity = 0.38,
  flip = false,
}) => {
  const rawId = useId();
  const id = rawId.replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className} ${flip ? '-scale-x-100' : ''}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-c-stem`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5E745A" />
          <stop offset="60%" stopColor="#7E967A" />
          <stop offset="100%" stopColor="#A2BA9E" />
        </linearGradient>
        <linearGradient id={`${id}-c-leaf1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#678363" stopOpacity="0.82" />
          <stop offset="50%" stopColor="#8DA88A" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#BDD3BB" stopOpacity="0.52" />
        </linearGradient>
        <linearGradient id={`${id}-c-leaf2`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#728C6E" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#97B093" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C8DBC5" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`${id}-c-pool`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3C5139" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6F8B6B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main arching corner stem */}
      <path
        d="M 12 12 Q 85 38 145 105 T 215 210"
        stroke={`url(#${id}-c-stem)`}
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Branchlet 1 */}
      <path d="M 62 32 Q 98 22 124 10" stroke={`url(#${id}-c-stem)`} strokeWidth="0.85" strokeLinecap="round" />
      {/* Branchlet 2 */}
      <path d="M 102 65 Q 138 60 162 42" stroke={`url(#${id}-c-stem)`} strokeWidth="0.85" strokeLinecap="round" />
      {/* Branchlet 3 */}
      <path d="M 142 105 Q 160 138 156 168" stroke={`url(#${id}-c-stem)`} strokeWidth="0.8" strokeLinecap="round" />
      {/* Branchlet 4 */}
      <path d="M 180 148 Q 212 154 228 140" stroke={`url(#${id}-c-stem)`} strokeWidth="0.75" strokeLinecap="round" />

      {/* Leaves with fine pencil outlines and veins */}
      {/* 1. Branchlet 1 Tip Leaf */}
      <g>
        <path
          d="M 124 10 C 136 0 150 6 144 18 C 136 24 124 18 124 10 Z"
          fill={`url(#${id}-c-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.45"
        />
        <path d="M 124 10 Q 136 12 144 18" stroke="#3D5338" strokeWidth="0.55" />
      </g>

      {/* 2. Branchlet 1 side leaf */}
      <g>
        <path
          d="M 90 26 C 100 15 114 20 108 30 C 100 36 90 32 90 26 Z"
          fill={`url(#${id}-c-leaf2)`}
          stroke="#4A6145"
          strokeWidth="0.42"
        />
        <path d="M 90 26 Q 102 24 108 30" stroke="#3D5338" strokeWidth="0.5" />
      </g>

      {/* 3. Branchlet 2 Tip Leaf */}
      <g>
        <path
          d="M 162 42 C 178 34 188 48 178 58 C 168 64 158 48 162 42 Z"
          fill={`url(#${id}-c-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.48"
        />
        <path d="M 162 42 C 170 38 178 46 178 58 C 172 52 165 46 162 42 Z" fill={`url(#${id}-c-pool)`} />
        <path d="M 162 42 Q 172 50 178 58" stroke="#3D5338" strokeWidth="0.6" />
        <path d="M 168 49 Q 174 46 177 44" stroke="#4A6145" strokeWidth="0.36" opacity="0.5" />
      </g>

      {/* 4. Branchlet 2 side leaf */}
      <g>
        <path
          d="M 130 62 C 142 52 152 62 146 72 C 137 76 128 68 130 62 Z"
          fill={`url(#${id}-c-leaf2)`}
          stroke="#4A6145"
          strokeWidth="0.42"
        />
        <path d="M 130 62 Q 140 64 146 72" stroke="#3D5338" strokeWidth="0.5" />
      </g>

      {/* 5. Branchlet 3 Tip Leaf */}
      <g>
        <path
          d="M 156 168 C 150 182 166 190 172 178 C 176 168 160 162 156 168 Z"
          fill={`url(#${id}-c-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.48"
        />
        <path d="M 156 168 Q 166 176 172 178" stroke="#3D5338" strokeWidth="0.55" />
      </g>

      {/* 6. Branchlet 4 Tip Leaf */}
      <g>
        <path
          d="M 228 140 C 240 148 234 164 222 160 C 212 158 218 144 228 140 Z"
          fill={`url(#${id}-c-leaf2)`}
          stroke="#4A6145"
          strokeWidth="0.45"
        />
        <path d="M 228 140 Q 226 154 222 160" stroke="#3D5338" strokeWidth="0.55" />
      </g>

      {/* 7. Main stem terminal leaf */}
      <g>
        <path
          d="M 215 210 C 222 196 235 204 230 215 C 224 222 214 218 215 210 Z"
          fill={`url(#${id}-c-leaf1)`}
          stroke="#4A6145"
          strokeWidth="0.45"
        />
        <path d="M 215 210 Q 226 210 230 215" stroke="#3D5338" strokeWidth="0.55" />
      </g>
    </svg>
  );
};

/**
 * Archetype 4: BotanicalPetiteSprig
 * Small, airy botanical sprig with 5-6 delicate leaves, ideal for subtle corner accents.
 */
export const BotanicalPetiteSprig: React.FC<BotanicalProps> = ({
  className = '',
  opacity = 0.36,
  flip = false,
}) => {
  const rawId = useId();
  const id = rawId.replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 160 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className} ${flip ? '-scale-x-100' : ''}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-p-stem`} x1="0" y1="1" x2="0.6" y2="0">
          <stop offset="0%" stopColor="#5E745A" />
          <stop offset="60%" stopColor="#7E967A" />
          <stop offset="100%" stopColor="#A2BA9E" />
        </linearGradient>
        <linearGradient id={`${id}-p-leaf`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#678363" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8EA98B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#BED4BC" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Curving stem */}
      <path
        d="M 18 180 Q 48 140 76 98 T 128 22"
        stroke={`url(#${id}-p-stem)`}
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      {/* Twiglets */}
      <path d="M 52 135 Q 32 118 22 96" stroke={`url(#${id}-p-stem)`} strokeWidth="0.75" />
      <path d="M 80 94 Q 106 82 126 68" stroke={`url(#${id}-p-stem)`} strokeWidth="0.75" />
      <path d="M 100 64 Q 85 45 70 28" stroke={`url(#${id}-p-stem)`} strokeWidth="0.7" />

      {/* Leaf 1 */}
      <g>
        <path
          d="M 22 96 C 12 85 10 66 22 56 C 32 64 34 82 22 96 Z"
          fill={`url(#${id}-p-leaf)`}
          stroke="#4A6145"
          strokeWidth="0.45"
        />
        <path d="M 22 96 Q 18 76 22 56" stroke="#3D5338" strokeWidth="0.55" />
      </g>
      {/* Leaf 2 */}
      <g>
        <path
          d="M 38 152 C 50 142 62 148 58 160 C 47 165 40 158 38 152 Z"
          fill={`url(#${id}-p-leaf)`}
          stroke="#4A6145"
          strokeWidth="0.4"
        />
        <path d="M 38 152 Q 52 150 58 160" stroke="#3D5338" strokeWidth="0.5" />
      </g>
      {/* Leaf 3 */}
      <g>
        <path
          d="M 126 68 C 138 58 146 42 138 32 C 128 38 122 54 126 68 Z"
          fill={`url(#${id}-p-leaf)`}
          stroke="#4A6145"
          strokeWidth="0.45"
        />
        <path d="M 126 68 Q 134 50 138 32" stroke="#3D5338" strokeWidth="0.55" />
      </g>
      {/* Leaf 4 */}
      <g>
        <path
          d="M 70 28 C 60 18 58 4 68 -2 C 76 5 77 20 70 28 Z"
          fill={`url(#${id}-p-leaf)`}
          stroke="#4A6145"
          strokeWidth="0.42"
        />
        <path d="M 70 28 Q 67 12 68 -2" stroke="#3D5338" strokeWidth="0.5" />
      </g>
      {/* Leaf 5 */}
      <g>
        <path
          d="M 128 22 C 125 12 132 7 135 14 C 136 18 132 20 128 22 Z"
          fill={`url(#${id}-p-leaf)`}
          stroke="#4A6145"
          strokeWidth="0.38"
        />
        <path d="M 128 22 Q 131 14 135 14" stroke="#3D5338" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

/**
 * Botanical sprig divider accent with centered leaf motif and subtle horizontal lines.
 */
export const BotanicalDivider: React.FC<BotanicalProps> = ({
  className = '',
  color = '#173A2F',
  opacity = 0.22,
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-3 select-none ${className}`}>
      <span className="h-[1px] w-12 sm:w-20 bg-current" style={{ color, opacity: opacity * 0.7 }} />
      <svg
        viewBox="0 0 54 24"
        width="54"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
        aria-hidden="true"
      >
        <line x1="2" y1="12" x2="52" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M 16 12 C 16 6 24 5 27 12 C 24 12 18 12 16 12 Z"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M 38 12 C 38 18 30 19 27 12 C 30 12 36 12 38 12 Z"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="27" cy="12" r="2.2" stroke={color} strokeWidth="1" fill="none" />
      </svg>
      <span className="h-[1px] w-12 sm:w-20 bg-current" style={{ color, opacity: opacity * 0.7 }} />
    </div>
  );
};

// ================= BACKWARD-COMPATIBLE ALIASES =================
export const WatercolorBotanicalBranch = BotanicalSlenderBranch;
export const WatercolorBotanicalSprig = BotanicalPetiteSprig;
export const WatercolorBotanicalArch = BotanicalCornerArch;

export const BotanicalBranchCorner = BotanicalCornerArch;
export const BotanicalBranchInward = BotanicalSlenderBranch;
export const BotanicalSprigCorner = BotanicalPetiteSprig;
export const BotanicalCornerLeaf = BotanicalCornerArch;
export const BotanicalEdgeFoliage = BotanicalEucalyptusSprig;
export const BotanicalAtmosphereCluster = BotanicalSlenderBranch;
