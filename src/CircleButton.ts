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
  // [dark/off, light/on]
  red: ["#4C0033", "#E80F88"],
  blue: ["#1B1A55", "#46C2CB"],
  green: ["#092635", "#9EC8B9"],
  yellow: ["#3E065F", "#8E05C2"],
};

// Create the styled button component
const CircleButton = styled.button<CircleButtonProps>`
  width: 20vw;
  max-width: 250px;
  height: 20vw;
  max-height: 250px;
  border: 2px solid #070F2B;
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
