type keyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  gameOver: boolean | undefined;
};

export const Keyboard = ({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
  gameOver,
}: keyboardProps) => {
  const keyboard = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="keyboard">
      {keyboard.map((letter) => {
        const isActive = activeLetter.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            onClick={() => addGuessedLetter(letter)}
            key={letter}
            className={`btn  ${isActive && `isActive`} ${
              isInactive && `inactive`
            }`}
            disabled={isInactive || gameOver}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
