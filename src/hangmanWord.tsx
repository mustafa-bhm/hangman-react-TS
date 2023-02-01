type hangmanWordProps = {
  guessedLetter: string[];
  wordToGuess: string;
  gameOver: boolean | undefined;
};

export const HangmanWord = ({
  guessedLetter,
  wordToGuess,
  gameOver,
}: hangmanWordProps) => {
  // const guesedLetter = [""];

  return (
    <div className="hangmanWord">
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            <span
              className={
                guessedLetter.includes(letter) || gameOver ? "" : "hidden"
              }
              style={{
                color:
                  !guessedLetter.includes(letter) && gameOver ? "red" : "black",
              }}
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
