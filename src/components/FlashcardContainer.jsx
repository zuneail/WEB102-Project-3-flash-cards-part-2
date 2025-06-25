import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardContainer.css';

function FlashcardContainer({ cards }) {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [input, setInput] = useState('');

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setShowAnswer(false);
    setUserGuess('');
    setIsCorrect(null);
    setInput('');
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setShowAnswer(false);
    setUserGuess('');
    setIsCorrect(null);
    setInput('');
  };

  const handleReset = () => {
    setIndex(0);
    setShowAnswer(false);
    setUserGuess('');
    setIsCorrect(null);
    setInput('');
  };

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserGuess(input);
    const correct = input.trim().toLowerCase() === cards[index].answer.trim().toLowerCase();
    setIsCorrect(correct);
    setShowAnswer(true);
  };

  return (
    <div className="flashcard-container">
      <Flashcard
        card={cards[index]}
        showAnswer={showAnswer}
        userGuess={userGuess}
        isCorrect={isCorrect}
      />
      {/* Input below the card */}
      {!showAnswer && (
        <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Your answer"
            autoFocus
          />
          <button type="submit" style={{ marginLeft: 8 }}>Submit</button>
        </form>
      )}
      {/* Next button only when answer is shown */}
      {showAnswer && (
        <button onClick={handleNext} style={{ marginTop: 24 }}>Next Card</button>
      )}
      <div className="controls">
        <button onClick={handlePrev} disabled={index === 0}>&larr; Prev</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleNext} disabled={index === cards.length - 1}>Next &rarr;</button>
      </div>
      <div style={{ marginTop: 10 }}>
        Card {index + 1} of {cards.length}
      </div>
    </div>
  );
}

export default FlashcardContainer;
