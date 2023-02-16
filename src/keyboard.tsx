import { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";

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
  const [show, setShow] = useState(false);
  const handelClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
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
      <div className="icon">
        <BsFillGearFill size={35} onClick={() => handelClick()} />
        <p>Rules</p>
      </div>
      {show && <Rules />}
    </div>
  );
};

const Rules = () => (
  <div className="rules">
    <p>
      Try to figure out the unknown word by guessing letters. If too many
      letters which do not appear in the word are guessed, you will lose.
    </p>
  </div>
);
