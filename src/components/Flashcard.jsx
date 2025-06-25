import React from 'react';
import './Flashcard.css';

function Flashcard({ card, showAnswer, userGuess, isCorrect }) {
  return (
    <div className={`flashcard${showAnswer ? ' flipped' : ''}`}>
      <div className="front">
        <div>{card.question}</div>
      </div>
      <div className="back">
        <div>
          <div>
            <strong>Your guess:</strong> {userGuess}
          </div>
          <div>
            <strong>Answer:</strong> {card.answer}
          </div>
          <div style={{ color: isCorrect ? 'green' : 'red', marginTop: 8 }}>
            {isCorrect === null ? '' : isCorrect ? 'Correct!' : 'Incorrect'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
