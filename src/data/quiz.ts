import type { QuizQuestion } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿Qué alimento es especialmente importante en la dieta de la tortuga carey?",
    options: ["Esponjas marinas", "Semillas terrestres", "Pasto de montaña", "Insectos"],
    correctAnswer: 0,
    explanation:
      "Las esponjas marinas forman una parte muy importante de la dieta de la tortuga carey.",
  },
  {
    id: "q2",
    question: "¿Para qué le resulta útil su pico estrecho y curvado?",
    options: [
      "Para alcanzar alimento en grietas del arrecife",
      "Para respirar bajo el agua",
      "Para producir sonidos fuertes",
      "Para caminar sobre la arena",
    ],
    correctAnswer: 0,
    explanation:
      "La forma de su pico le permite acceder a alimento que se encuentra en grietas y espacios difíciles del arrecife.",
  },
  {
    id: "q3",
    question: "¿Con qué ambiente marino se asocia frecuentemente la tortuga carey?",
    options: ["Arrecifes de coral", "Ríos de montaña", "Lagos de agua dulce", "Desiertos"],
    correctAnswer: 0,
    explanation:
      "La tortuga carey se encuentra con frecuencia en ambientes tropicales y está muy asociada a arrecifes de coral.",
  },
  {
    id: "q4",
    question: "¿Cuál es una amenaza importante para la tortuga carey?",
    options: [
      "El comercio ilegal de su caparazón",
      "La falta de nieve",
      "La competencia con aves terrestres",
      "La ausencia de árboles en alta montaña",
    ],
    correctAnswer: 0,
    explanation:
      "El aprovechamiento y comercio ilegal de su caparazón ha sido una amenaza grave para la especie, junto con otras presiones como la captura incidental y la pérdida de hábitat.",
  },
];
