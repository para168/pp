import React, { useState, useEffect } from 'react';
import { SubjectSelector } from './components/SubjectSelector';
import { ChapterSelector } from './components/ChapterSelector';
import { ChapterContent } from './components/ChapterContent';
import { subjectsData } from './data/subjects';

function App() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  // Clear selected subject and chapter
  const handleReset = () => {
    setSelectedChapter(null);
    setSelectedSubject(null);
  };

  // Ensure loading of data and avoid any issues when the subject or chapter changes
  useEffect(() => {
    if (!selectedSubject || !selectedChapter) return;

    // Example of logging the current subject and chapter
    console.log(`Selected Subject: ${selectedSubject}, Chapter: ${selectedChapter}`);
  }, [selectedSubject, selectedChapter]);

  if (!selectedSubject) {
    return (
      <SubjectSelector
        subjects={Object.keys(subjectsData)}
        selectedSubject={selectedSubject}
        onSelect={setSelectedSubject}
      />
    );
  }

  if (!selectedChapter) {
    return (
      <ChapterSelector
        chapters={Object.keys(subjectsData[selectedSubject])}
        selectedChapter={selectedChapter}
        onSelect={setSelectedChapter}
        onBack={handleReset}
      />
    );
  }

  return (
    <ChapterContent
      chapters={subjectsData[selectedSubject][selectedChapter]}
      onBack={() => setSelectedChapter(null)}
    />
  );
}

export default App;
