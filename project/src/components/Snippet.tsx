import React from 'react';
import type { Snippet as SnippetType } from '../types';

interface SnippetProps {
  snippet: SnippetType;
  index: number;
  total: number;
}

export const Snippet: React.FC<SnippetProps> = ({ snippet, index, total }) => {
  const formatFormula = (formula: string | null) => {
    if (!formula) return null;
    
    return formula.split('\n').map((line, i) => {
      if (line.includes('----------------------------------------')) {
        return <div key={i} className="w-full border-b border-gray-700 my-4" />;
      }
      if (line.trim().endsWith(':')) {
        return <h4 key={i} className="text-xl font-semibold text-green-400 mt-6 mb-4">{line}</h4>;
      }
      if (line.trim()) {
        return (
          <div key={i} className="mb-6 last:mb-0">
            <pre className="font-mono text-lg bg-gray-800/50 rounded-lg p-4 overflow-x-auto">
              {line.trim()}
            </pre>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen snap-start flex flex-col justify-center items-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-3xl w-full relative">
        <span className="absolute top-4 right-4 text-sm text-gray-400">
          {index + 1} / {total}
        </span>
        
        <h2 className="text-3xl font-bold mb-6 text-white">{snippet.title}</h2>
        
        <p className="text-lg leading-relaxed text-gray-200 mb-8">
          {snippet.description}
        </p>
        
        {snippet.formula && (
          <div className="bg-gray-900/80 rounded-xl p-6 my-8">
            {formatFormula(snippet.formula)}
          </div>
        )}
        
        {snippet.variables && (
          <div className="mt-8 bg-gray-800/50 rounded-lg p-6">
            <h4 className="text-xl font-semibold text-green-400 mb-4">Variables:</h4>
            <pre className="font-mono text-gray-300 whitespace-pre-wrap">
              {snippet.variables}
            </pre>
          </div>
        )}
        
        <div className="mt-8">
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20">
            {snippet.subject}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20 ml-2">
            {snippet.chapter}
          </span>
        </div>
      </div>
    </div>
  );
};