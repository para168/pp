import React from 'react';
import type { ChapterSelectorProps } from '../types';
import { ArrowLeft } from 'lucide-react';

export const ChapterSelector: React.FC<ChapterSelectorProps & { onBack: () => void }> = ({ 
  chapters, 
  selectedChapter, 
  onSelect,
  onBack 
}) => {
  return (
    <div className="min-h-screen bg-gray-950 p-4">
      <button 
        onClick={onBack}
        className="mb-6 text-gray-400 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Subjects
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {chapters.map((chapter) => (
          <button
            key={chapter}
            onClick={() => onSelect(chapter)}
            className={`
              p-6 rounded-lg text-left transition-all
              ${selectedChapter === chapter 
                ? 'bg-green-500 text-white transform scale-105' 
                : 'bg-gray-800 text-gray-100 hover:bg-gray-700'}
            `}
          >
            <h3 className="text-lg font-semibold">{chapter}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};