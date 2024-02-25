import { useState } from "react";
import { GameButtonColor } from "./main";
import "./GameButton.css";

interface GameButtonProps {
  lightedUp: boolean;
  buttonColor: GameButtonColor;
  onPress: (pressedColor: GameButtonColor) => void;
}

function GameButton({ lightedUp, buttonColor, onPress }: GameButtonProps) {
  const [animation, setAnimation] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    if (!isPressed) {
      setIsPressed(true);
      setTimeout(() => {
        setIsPressed(false);
      }, 500);

      /* Notify button press to parent */
      onPress(buttonColor);

      /* Play animation */
      setAnimation("click-animation");
      setTimeout(() => {
        setAnimation("");
      }, 100);
    }
  };

  return (
    <div className="inline-block p-1">
      <button
        className={`
          circle-button
          ${buttonColor}-${lightedUp ? "on" : "off"}
          ${animation}`}
        onClick={handleClick}
        onTouchStart={handleClick}
      ></button>
    </div>
  );
}

export default GameButton;
