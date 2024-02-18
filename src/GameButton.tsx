import React, { useState } from "react";
import CircleButton from "./CircleButton";
import { GameButtonColor } from "./main";

interface GameButtonProps {
  lightedUp: boolean;
  buttonColor: GameButtonColor;
}

function GameButton({ lightedUp, buttonColor }: GameButtonProps) {
  const [isPushed, setIsPushed] = useState(false);

  const handleMouseDown = () => {
    setIsPushed(true);
  };

  const handleMouseUp = () => {
    setIsPushed(false);
  };

  return (
    <>
      <div></div>
      <CircleButton
        buttonColor={buttonColor}
        pushed={isPushed}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        _{lightedUp && buttonColor}_
      </CircleButton>
    </>
  );
}

export default GameButton;
