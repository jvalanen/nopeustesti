import styled from "styled-components";
import { GameButtonColor } from "./main";

// Define the props interface
interface CircleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pushed?: boolean;
  buttonColor?: GameButtonColor;
}

// Create the styled button component
const CircleButton = styled.button<CircleButtonProps>`
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: ${(props) => props.buttonColor};
  cursor: pointer;
  transition: all 0.2s ease;
  transform: ${(props) => (props.pushed ? `scale(0.9)` : `scale(1)`)};
`;

export default CircleButton;
