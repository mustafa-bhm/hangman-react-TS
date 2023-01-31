import { useState } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  // to set the word to guess
  const [wordToGuess, setWordtoGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  // to track the guessed letters
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
  // to track the incorrect letters
  const incorrectLetters = guessedLetter.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = (letter: string) => {
    // check if letter already in the gussedLetter array , then return
    if (guessedLetter.includes(letter)) return;
    // if not , add the letter to the guessedLetter array

    setGuessedLetter([...guessedLetter, letter]);
  };

  return (
    <div className="App">
      <div>lose win</div>
      <HangmanDrawing numberOfGueses={incorrectLetters.length} />
      <HangmanWord guessedLetter={guessedLetter} wordToGuess={wordToGuess} />
      <Keyboard
        activeLetter={guessedLetter.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;
