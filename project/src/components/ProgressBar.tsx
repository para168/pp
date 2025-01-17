import React from 'react';
import type { ProgressBarProps } from '../types';

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="fixed top-0 right-0 w-1 h-screen bg-white/10">
      <div 
        className="w-full bg-green-500 transition-all duration-100 ease-in-out"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};