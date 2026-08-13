export type EducationalSectionId =
  | "habitat"
  | "alimentacion"
  | "caracteristicas"
  | "amenazas"
  | "conservacion";

export interface EducationalSection {
  id: EducationalSectionId;
  title: string;
  icon: string;
  summary: string;
  content: string[];
  sourceIds: string[];
}

export interface Hotspot {
  id: string;
  title: string;
  description: string;
  position: string;
  normal: string;
  ariaLabel: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ScientificSource {
  id: string;
  organization: string;
  title: string;
  reference: string;
  accessDate: string;
}
