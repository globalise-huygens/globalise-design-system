"use client";

import { cn } from "@globalise/design-system";
import * as React from "react";

export function DemoScanPage({
  className,
  label = "Abstract manuscript scan placeholder",
}: {
  className?: string;
  label?: string;
}) {
  const svgId = React.useId().replace(/:/g, "");
  const paperId = `${svgId}-paper`;
  const shadowId = `${svgId}-shadow`;
  const fibersId = `${svgId}-fibers`;

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 220 312"
      className={cn("block h-full w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={paperId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#efe2c6" />
          <stop offset="0.48" stopColor="#f6edda" />
          <stop offset="1" stopColor="#decca8" />
        </linearGradient>
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="5"
            stdDeviation="4"
            floodColor="#000000"
            floodOpacity="0.28"
          />
        </filter>
        <pattern
          id={fibersId}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M2 4h9M7 12h8M12 2h4"
            stroke="#b69d74"
            strokeOpacity="0.22"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
        </pattern>
      </defs>
      <rect width="220" height="312" fill="#26211a" />
      <g filter={`url(#${shadowId})`}>
        <path d="M38 14h142l5 11v263l-8 10H36l-5-12V24l7-10Z" fill="#d3be91" />
        <path
          d="M45 18h137l4 13v255l-11 8H44l-7-10V27l8-9Z"
          fill={`url(#${paperId})`}
        />
        <path
          d="M45 18h137l4 13v255l-11 8H44l-7-10V27l8-9Z"
          fill={`url(#${fibersId})`}
        />
        <path
          d="M51 24c-7 33-7 70-3 109 4 47 2 95-4 145"
          fill="none"
          stroke="#8b724d"
          strokeOpacity="0.26"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M181 31c-3 30-2 58 1 84 5 46 5 90-3 170"
          fill="none"
          stroke="#6e5739"
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g
          fill="none"
          stroke="#4c3b2a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
          opacity="0.82"
        >
          <path d="M74 78c21-5 45-5 70 1 8 2 15 2 23-1" />
          <path d="M72 88c18-4 35 3 54 0 14-2 26-7 42-2" />
          <path d="M70 99c25-7 51 2 76-3 11-2 20-1 27 3" />
          <path d="M76 110c18 1 37-5 56-2 15 2 29 3 42-2" />
          <path d="M70 122c21-4 42-1 63 0 14 1 27-4 39-1" />
          <path d="M73 134c25-7 51 3 76-2 8-2 14-2 20 0" />
          <path d="M68 146c19-3 38 2 58-1 16-3 32-5 48 0" />
          <path d="M76 158c16 2 34-6 52-2 15 3 30 4 44 0" />
          <path d="M69 171c21-4 43 1 64 0 13-1 25-3 38 1" />
          <path d="M72 183c18-4 37 0 55 0 15 0 31-4 46-1" />
          <path d="M68 195c24-5 47 2 72-1 12-2 23-4 34 0" />
          <path d="M75 207c17 0 34-4 52-1 16 2 31 3 45 0" />
          <path d="M69 220c22-5 45 1 68-2 12-2 24-2 35 2" />
          <path d="M73 232c17-3 35 1 53 1 17 0 32-4 47-1" />
          <path d="M69 244c24-7 48 3 72-2 11-2 22-1 32 2" />
        </g>
        <g
          fill="none"
          stroke="#3f3024"
          strokeLinecap="round"
          strokeWidth="1.2"
          opacity="0.58"
        >
          <path d="M58 129c-11 10-16 16-25 18" />
          <path d="M62 180c-12 13-19 18-30 20" />
          <path d="M63 237c-12 11-21 17-30 20" />
        </g>
      </g>
    </svg>
  );
}
