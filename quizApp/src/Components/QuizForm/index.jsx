import React, { useState } from "react";
import "./style.css";
import quizData from "../Api/api";

function QuizForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer. Try again!");
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("You've completed the quiz!");
    }
  };

  return (
    <div className="quiz-main">
      <div className="container">
        <div className="question-container">{currentQuestion.question}</div>
        <div className="options-container">
          {currentQuestion.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              className="option-button"
              onClick={() => handleOptionClick(option.isCorrect)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizForm;
