import './App.css';
import FlashcardContainer from './components/FlashcardContainer';

function App() {
  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Who wrote Hamlet?", answer: "William Shakespeare" },
    { question: "What’s the boiling point of water?", answer: "100°C" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "What year did the Titanic sink?", answer: "1912" },
    { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
    { question: "What is the smallest prime number?", answer: "2" }
  ];

  return (
    <div className="app">
      <div className="centered-content">
        <h1>Flashcard Quiz</h1>
        <p>Use these flashcards to help study</p>
        <p>Total Cards: {flashcards.length}</p>
        <FlashcardContainer cards={flashcards} />
      </div>
    </div>
  );
}

export default App;
