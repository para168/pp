import React from 'react';
import type { SubjectSelectorProps } from '../types';
import { BookOpen } from 'lucide-react';

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({ 
  subjects, 
  selectedSubject, 
  onSelect 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 p-4">
      <h1 className="text-4xl font-bold text-white mb-8 flex items-center gap-2">
        <BookOpen className="w-8 h-8" />
        StudyScroll
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => onSelect(subject)}
            className={`
              p-6 rounded-lg text-xl font-semibold transition-all
              ${selectedSubject === subject 
                ? 'bg-green-500 text-white transform scale-105' 
                : 'bg-gray-800 text-gray-100 hover:bg-gray-700'}
            `}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};