import type { QuizQuestion } from "@/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿Qué alimento es especialmente importante en la dieta de la tortuga carey?",
    options: ["Esponjas marinas", "Peces", "Pasto de montaña", "Crustáceos"],
    correctAnswer: 0,
    explanation:
      "Las esponjas marinas forman una parte muy importante de la dieta de la tortuga carey.",
  },
  {
    id: "q2",
    question: "¿Para qué le resulta útil su pico estrecho y curvado?",
    options: [
      "Para alimentarse de esponjas y arrancar organismos costrosos",
      "Para respirar bajo el agua",
      "Para producir sonidos fuertes",
      "Para desplazarse por el océano",
    ],
    correctAnswer: 0,
    explanation:
      "Su pico estrecho y curvado le ayuda a alimentarse de esponjas y a arrancar organismos costrosos adheridos al arrecife.",
  },
  {
    id: "q3",
    question: "¿Con qué ambientes marinos se asocia frecuentemente la tortuga carey?",
    options: ["Arrecifes y manglares", "Esteros y bahías", "Playas arenosas", "Islas rocosas"],
    correctAnswer: 0,
    explanation:
      "La tortuga carey se asocia frecuentemente con arrecifes de coral y también utiliza ambientes costeros como manglares.",
  },
  {
    id: "q4",
    question: "¿Cuál es una amenaza importante para la tortuga carey?",
    options: [
      "El comercio ilegal de su caparazón",
      "Comercio de adultos",
      "Ausencia de conchas en las playas",
      "Competencia con moluscos",
    ],
    correctAnswer: 0,
    explanation:
      "El aprovechamiento y comercio ilegal de su caparazón ha sido una amenaza grave para la especie, junto con otras presiones como la captura incidental y la pérdida de hábitat.",
  },
];
