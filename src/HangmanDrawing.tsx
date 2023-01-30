type hangmanProps = {
  numberOfGueses: number;
};

const HEAD = <div className="head"></div>;
const BODY = <div className="torso"></div>;
const RIGHT_ARM = <div className="right-arm"></div>;
const LEFT_ARM = <div className="left-arm"></div>;
const RIGHT_LEG = <div className="right-leg"></div>;
const LEFT_LEG = <div className="left-leg"></div>;
const bodyParts = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
export const HangmanDrawing = ({ numberOfGueses }: hangmanProps) => {
  return (
    <div className="drawing">
      {bodyParts.slice(0, numberOfGueses)}
      <div className="bar-down"></div>
      <div className="horizontal-bar"></div>
      <div className="bar"></div>
      <div className="base"></div>
    </div>
  );
};
