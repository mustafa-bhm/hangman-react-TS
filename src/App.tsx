import { useEffect, useState } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  // to generate new word
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  // to set the word to guess
  const [wordToGuess, setWordtoGuess] = useState(getWord);

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

  // Game over logic

  const correctLetters = guessedLetter.filter((letter) =>
    wordToGuess.includes(letter)
  );

  // compare correct letters with word  using every() & includes()

  let check = (arr: string[], target: string[]) =>
    target.every((v: string) => arr.includes(v));
  console.log("word to guess", wordToGuess);
  const [gameOver, setGameOver] = useState<boolean>();
  const [winner, setWinner] = useState<string>("");

  const isGameOver = () => {
    if (incorrectLetters.length == 6) {
      setGameOver(true);
      setWinner("You lost !");
    } else if (check(correctLetters, wordToGuess.split(""))) {
      setGameOver(true);
      setWinner("You Won !");
    }
  };

  useEffect(() => {
    isGameOver();
  }, [guessedLetter]);

  function reset() {
    setGameOver(false);
    setWinner("");
    setWordtoGuess(getWord());
    setGuessedLetter([]);
  }

  return (
    <div className="App">
      <div className="top-menu">
        <p className="game-over">{gameOver && "GAME OVER"}</p>
        <div>{winner}</div>
        {gameOver && (
          <button className="reset-btn" onClick={() => reset()}>
            Click to reset
          </button>
        )}
      </div>
      <HangmanDrawing numberOfGueses={incorrectLetters.length} />
      <HangmanWord
        guessedLetter={guessedLetter}
        wordToGuess={wordToGuess}
        gameOver={gameOver}
      />
      <Keyboard
        activeLetter={guessedLetter.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        gameOver={gameOver}
      />
    </div>
  );
}

export default App;
