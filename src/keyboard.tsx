import React from "react";

export const Keyboard = () => {
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
        return (
          <button key={letter} className="btn single-letter">
            {letter}
          </button>
        );
      })}
    </div>
  );
};
