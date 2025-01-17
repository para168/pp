import React, { useEffect, useState } from 'react';
import { Chapter } from '../types';
import { ProgressBar } from './ProgressBar';
import { Snippet } from './Snippet';
import { ArrowLeft } from 'lucide-react';

interface ChapterContentProps {
  chapters: Chapter[];
  onBack: () => void;
}

export const ChapterContent: React.FC<ChapterContentProps> = ({ chapters, onBack }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <button 
        onClick={onBack}
        className="fixed top-4 left-4 z-50 text-gray-400 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Chapters
      </button>

      <ProgressBar progress={progress} />
      
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        {chapters.map((chapter, index) => (
          <Snippet 
            key={chapter.id}
            snippet={chapter}
            index={index}
            total={chapters.length}
          />
        ))}
      </div>
    </div>
  );
};