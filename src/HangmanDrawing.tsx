import React from "react";

const HEAD = <div className="head"></div>;
const BODY = <div className="torso"></div>;
const RIGHT_ARM = <div className="right-arm"></div>;
const LEFT_ARM = <div className="left-arm"></div>;
const RIGHT_LEG = <div className="right-leg"></div>;
const LEFT_LEG = <div className="left-leg"></div>;
export const HangmanDrawing = () => {
  return (
    <div className="drawing">
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      {BODY}
      {HEAD}
      <div className="bar-down"></div>
      <div className="horizontal-bar"></div>
      <div className="bar"></div>
      <div className="base"></div>
    </div>
  );
};
