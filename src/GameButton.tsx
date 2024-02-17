import "./GameButton.css";
import { GameButtonColor } from "./main";

interface GameButtonProps {
  lightedUp: boolean;
  color: GameButtonColor;
}

function GameButton({ lightedUp, color }: GameButtonProps) {
  return (
    <div>
      <div>_{lightedUp && color}_</div>
    </div>
  );
}

export default GameButton;
