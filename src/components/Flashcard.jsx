import React from 'react';
import './Flashcard.css';

function Flashcard({ card, isFlipped, onClick }) {
  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="front">{card.question}</div>
      <div className="back">{card.answer}</div>
    </div>
  );
}

export default Flashcard;
