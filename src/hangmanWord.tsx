import React from "react";

export const HangmanWord = () => {
  const word: string = "finance";
  const wordArr: string[] = word.split("");
  const guesedLetter = ["e", "f", "i", "n"];

  return (
    <div className="hangmanWord">
      {wordArr.map((letter, index) => {
        return (
          <span className="letter">
            <span
              className={guesedLetter.includes(letter) ? "" : "hidden"}
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
