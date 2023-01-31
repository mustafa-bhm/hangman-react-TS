type hangmanWordProps = {
  guessedLetter: string[];
  wordToGuess: string;
};

export const HangmanWord = ({
  guessedLetter,
  wordToGuess,
}: hangmanWordProps) => {
  // const guesedLetter = [""];

  return (
    <div className="hangmanWord">
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            <span
              className={guessedLetter.includes(letter) ? "" : "hidden"}
              key={index}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};
