import React, { useState } from 'react';

const triviaQuestions = [
  { question: "What's the most romantic city in the world?", options: ['Paris', 'Venice', 'New York', 'Tokyo'], answer: 'Paris' },
  { question: "Which movie features the quote, 'You had me at hello'?", options: ['Titanic', 'Jerry Maguire', 'The Notebook', 'Pretty Woman'], answer: 'Jerry Maguire' },
  { question: "In what year did the Titanic sink?", options: ['1912', '1910', '1915', '1905'], answer: '1912' },
  { question: "What's the traditional gift for a 25th wedding anniversary?", options: ['Gold', 'Silver', 'Diamond', 'Platinum'], answer: 'Silver' },
  { question: "Which fruit is known as the 'fruit of the gods'?", options: ['Apple', 'Pomegranate', 'Fig', 'Grape'], answer: 'Fig' },
  { question: "What is the capital of France?", options: ['Lyon', 'Marseille', 'Paris', 'Nice'], answer: 'Paris' },
  { question: "Who wrote Romeo and Juliet?", options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'], answer: 'William Shakespeare' },
  { question: "What is the main ingredient in a Margherita Pizza?", options: ['Pepperoni', 'Mushrooms', 'Tomatoes', 'Basil'], answer: 'Tomatoes' },
  { question: "Which planet is known as the 'Red Planet'?", options: ['Mars', 'Jupiter', 'Saturn', 'Venus'], answer: 'Mars' },
  { question: "What year was the first iPhone released?", options: ['2007', '2005', '2008', '2006'], answer: '2007' },
];

const CoupleTrivia = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === triviaQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < triviaQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz completed! Your score: ${score + 1}/${triviaQuestions.length}`);
      // Reset for a new game or navigate to another component
    }
  };

  return (
    <div>
      <h2>{triviaQuestions[currentQuestionIndex].question}</h2>
      <div>
        {triviaQuestions[currentQuestionIndex].options.map(option => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoupleTrivia;