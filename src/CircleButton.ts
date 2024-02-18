import styled from "styled-components";
import { GameButtonColor } from "./main";

// Define the props interface
interface CircleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pushed: boolean;
  buttonColor: GameButtonColor;
  lightedUp: boolean;
}

const buttonColors = {
  red: ["#400000", "#FF6347"],
  blue: ["#000040", "#ADD8E6"],
  green: ["#004000", "#90EE90"],
  yellow: ["#806000", "#FFFF00"],
};

// Create the styled button component
const CircleButton = styled.button<CircleButtonProps>`
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: ${(props) =>
    buttonColors[props.buttonColor][props.lightedUp ? 1 : 0]};
  cursor: pointer;
  transition: all 0.2s ease;
  transform: ${(props) => (props.pushed ? `scale(0.9)` : `scale(1)`)};
  -webkit-tap-highlight-color: transparent;

  &.click {
    animation: scaleAnimation 0.1s ease infinite alternate;
  }
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1); /* Initial scale */
  }
  100% {
    transform: scale(0.9); /* Scale to 1.5 times */
  }
}
`;

export default CircleButton;
