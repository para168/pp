export interface Chapter {
  id: string;
  title: string;
  description: string;
  formula?: string;
  variables?: string;
}

export interface Subject {
  id: string;
  name: string;
  chapters: {
    [key: string]: Chapter[];
  };
}

export interface ProgressBarProps {
  progress: number;
}

export interface SubjectSelectorProps {
  subjects: string[];
  selectedSubject: string | null;
  onSelect: (subject: string) => void;
}

export interface ChapterSelectorProps {
  chapters: string[];
  selectedChapter: string | null;
  onSelect: (chapter: string) => void;
}