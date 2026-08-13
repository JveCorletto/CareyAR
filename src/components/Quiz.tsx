"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quiz";

export function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[questionIndex];
  const hasAnswered = selectedOption !== null;
  const isCorrect = hasAnswered && selectedOption === question.correctAnswer;

  const selectAnswer = (optionIndex: number) => {
    if (hasAnswered) return;

    setSelectedOption(optionIndex);
    if (optionIndex === question.correctAnswer) {
      setScore((current) => current + 1);
    }
  };

  const nextQuestion = () => {
    if (!hasAnswered) return;

    if (questionIndex === quizQuestions.length - 1) {
      setFinished(true);
      return;
    }

    setQuestionIndex((current) => current + 1);
    setSelectedOption(null);
  };

  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section id="quiz" className="quiz-section section-anchor" aria-labelledby="quiz-title">
      <div className="shell quiz-shell">
        <div className="section-heading section-heading-light">
          <p className="eyebrow">Mini quiz</p>
          <h2 id="quiz-title">¿Qué aprendiste sobre la tortuga carey?</h2>
          <p>Son solo cuatro preguntas. Recibirás una explicación después de cada respuesta.</p>
        </div>

        <div className="quiz-card">
          {finished ? (
            <div className="quiz-result" aria-live="polite">
              <span className="result-icon" aria-hidden="true">🐢</span>
              <h3>¡Eres un experto en la tortuga carey! 🐢</h3>
              <p className="score">Puntaje: {score}/{quizQuestions.length}</p>
              <p>Gracias por completar el recorrido educativo de CareyAR.</p>
              <button type="button" className="button button-primary" onClick={restart}>
                Intentar de nuevo
              </button>
            </div>
          ) : (
            <>
              <div className="quiz-progress" aria-label={`Pregunta ${questionIndex + 1} de ${quizQuestions.length}`}>
                <span>Pregunta {questionIndex + 1} de {quizQuestions.length}</span>
                <span>Puntaje: {score}</span>
              </div>
              <div className="progress-track" aria-hidden="true">
                <span style={{ width: `${((questionIndex + 1) / quizQuestions.length) * 100}%` }} />
              </div>

              <h3 className="quiz-question">{question.question}</h3>

              <div className="quiz-options" role="group" aria-label="Opciones de respuesta">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedOption === optionIndex;
                  const isCorrectOption = hasAnswered && optionIndex === question.correctAnswer;
                  const isWrongSelected = hasAnswered && isSelected && !isCorrectOption;

                  return (
                    <button
                      key={option}
                      type="button"
                      className={`quiz-option ${isCorrectOption ? "is-correct" : ""} ${isWrongSelected ? "is-wrong" : ""}`}
                      onClick={() => selectAnswer(optionIndex)}
                      disabled={hasAnswered}
                      aria-pressed={isSelected}
                    >
                      <span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + optionIndex)}</span>
                      <span>{option}</span>
                      {isCorrectOption && <span className="option-state" aria-label="Respuesta correcta">✓</span>}
                      {isWrongSelected && <span className="option-state" aria-label="Respuesta incorrecta">×</span>}
                    </button>
                  );
                })}
              </div>

              <div className="quiz-feedback" aria-live="polite">
                {hasAnswered ? (
                  <>
                    <p className={`feedback-label ${isCorrect ? "correct" : "incorrect"}`}>
                      <span aria-hidden="true">{isCorrect ? "✓" : "✕"}</span> {isCorrect ? "¡Correcto!" : "Incorrecto"}
                    </p>
                    <p>{question.explanation}</p>
                    <button type="button" className="button button-secondary" onClick={nextQuestion}>
                      {questionIndex === quizQuestions.length - 1 ? "Ver resultado" : "Siguiente pregunta"}
                    </button>
                  </>
                ) : (
                  <p>Selecciona una opción para continuar.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
