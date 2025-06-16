import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './FlashcardContainer.css';

function FlashcardContainer({ cards }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  };

  return (
    <div className="flashcard-container">
      <Flashcard card={cards[index]} isFlipped={isFlipped} onClick={handleFlip} />
      <div className="controls">
        <button onClick={handlePrev}>&larr; Prev</button>
        <button onClick={handleNext}>Next &rarr;</button>
      </div>
    </div>
  );
}

export default FlashcardContainer;
