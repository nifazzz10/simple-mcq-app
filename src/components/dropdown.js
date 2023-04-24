import React, { useState } from 'react';
import questions2 from '../question2';
import questions from '../question';
import "./dropdown.css"
import MCQ from './mcq.js';
import styled from 'styled-components';
const quizzes = [
  { name: 'SELECT QUIZ'},
  { name: 'KALVIUM ORGANIZATION', questions: questions },
  { name: 'ABOUT  COUNTRY', questions: questions2 },

];


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

const QuizDropdown = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(quizzes[0]);
  const [showMCQ, setShowMCQ] = useState(false);

  const handleQuizChange = (event) => {
    const selectedQuizName = event.target.value;
    const selectedQuiz = quizzes.find((quiz) => quiz.name === selectedQuizName);
    setSelectedQuiz(selectedQuiz);
    setShowMCQ(true);
  };

  const handleMCQComplete = () => {
    setShowMCQ(false);
  };

  return (
    <div>
      {showMCQ ? (
        <>     <MCQ questions={selectedQuiz.questions} onComplete={handleMCQComplete} quizname={selectedQuiz.name}/></>
   
      ) : (<div className='mcq-container'>
         <Title>Modernized Quiz App</Title>
        <select value={selectedQuiz.name} onChange={handleQuizChange}>
          {quizzes.map((quiz) => (
            <option key={quiz.name} value={quiz.name}>
              {quiz.name }
            </option>
          ))}
        </select></div>
      )}
    </div>
  );
};

export default QuizDropdown;
