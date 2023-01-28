import { useState } from "react";
import words from "./wordList.json";

import "./App.css";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./hangmanWord";
import { Keyboard } from "./keyboard";

function App() {
  // to set the word to guess
  const [wordToGuess, setWordtoGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // to track the guessed letters
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  return (
    <div className="App">
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto ",
          alignItems: "center",
        }}
      >
        <div>lose win</div>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
