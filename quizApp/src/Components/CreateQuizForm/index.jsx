import React, { useState } from "react";
import "./style.css";
function CreateQuizForm() {
  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="question">Câu hỏi:</label>
        <input type="text" id="question" className="question-input" />
      </div>
      <div className="form-group">
        <div className="options-container">
          <div>
            <label>Đáp án 1</label>
            <input type="text" className="option-input" />
          </div>
          <div>
            <label>Đáp án 2</label>
            <input type="text" className="option-input" />
          </div>
          <div>
            <label>Đáp án 3</label>
            <input type="text" className="option-input" />
          </div>
          <div>
            <label>Đáp án 4</label>
            <input type="text" className="option-input" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="correctAnswer">Đáp án đúng:</label>
        <input type="text" id="correctAnswer" className="answer-input" />
      </div>
      <button type="submit" className="button">
        Tạo câu hỏi
      </button>
    </form>
  );
}

export default CreateQuizForm;
