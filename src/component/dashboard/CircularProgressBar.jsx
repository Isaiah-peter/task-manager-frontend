import React from 'react';
import '../../style/CircularProgressBar.css';

const CircularProgressBar = ({ progress, color }) => {
  const radius = 54;
  const stroke = 12;
  const normalizedRadius = radius;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <svg width="120" height="120" className="circular-progress-bar">
      {/* Background circle */}
      <circle
        className="circle-bg"
        stroke="#e0e0e0"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx="60"
        cy="60"
      />

      {/* Progress circle */}
      <circle
        className="circle-progress"
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx="60"
        cy="60"
        transform="rotate(-90 60 60)"
      />

      {/* Progress text */}
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fontSize="22"
        fill={color}
        fontFamily="Arial, sans-serif"
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
