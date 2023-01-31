import { useEffect, useState } from "react";
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

  // Game over logic

  const correctLetters = guessedLetter.filter((letter) =>
    wordToGuess.includes(letter)
  );

  // compare correct letters with word  using every() & includes

  let check = (arr: string[], target: string[]) =>
    target.every((v: string) => arr.includes(v));
  console.log("check", check(correctLetters, wordToGuess.split("")));
  console.log("correct letters", correctLetters);
  console.log("word to guess", wordToGuess.split(""));
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
  }, [incorrectLetters]);

  return (
    <div className="App">
      <p>{gameOver && "GAME OVER !"}</p>
      <div>{winner}</div>

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
