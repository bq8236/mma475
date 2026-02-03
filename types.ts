
export interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export interface Regulation {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  url?: string;
}

export interface InvestigationItem {
  id: string;
  category: string;
  defect: string;
  clause: string;
  criteria: {
    condition?: string;
    action: '경고' | '주의' | '시정' | '가중처리';
  }[];
}

export enum AppTab {
  SERVICE = 'SERVICE',
  LIBRARY = 'LIBRARY',
  CASES = 'CASES',
  CHECKLIST = 'CHECKLIST',
  INVESTIGATION = 'INVESTIGATION',
  GUIDE = 'GUIDE'
}
