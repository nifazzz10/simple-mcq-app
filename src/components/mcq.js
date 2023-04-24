import React, { useEffect, useState } from 'react';

import './MCQ.css';

import styled from 'styled-components';
const MCQ = ({questions,quizname}) => {
   

    const Title = styled.h2`
    font-size: 2rem;
  font-weight: bold;
  color: green;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  padding: 1rem;
    `;
   
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='mcq-container'>
         <div>
      <Title>Modernized Quiz App</Title>

    </div>
      {showScore ? (
      <> <div className='mcq-score-section'>
          <div className='answe'>🏆You have Scored {score} from {questions.length} questions!</div>
          
         
        </div> {score>3 ?(<>  Good you have good  Knowledge about {quizname}😃</>):(<>You need Study more about {quizname}😒</>)} <div className='scores'><h2>Answers:</h2> {questions.map((question, index) => (
            <div key={index}>
              <div>{question.question}</div>
              <div><strong>Answer:</strong> {question.answer}</div>
            </div>
          ))}</div></> 
      ) : (
        <>
          <div className='mcq-question-section'>
            <div className='mcq-question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='mcq-question-text'>{questions[currentQuestion].question}</div>
          </div>
          <div className='mcq-answer-section'>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className='mcq-answer-button'
                onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MCQ;
