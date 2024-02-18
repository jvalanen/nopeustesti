import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const INITIAL_TICK_INTERVAL = 1500;
const SPEED_UP_INTERVAL = 0.985;

export enum GameButtonColor {
  Red = "red",
  Blue = "blue",
  Green = "green",
  Yellow = "yellow",
  // Purple = "purple",
  // Black = "black",
  // Grey = "grey",
}

export type TickEvent = CustomEvent<{
  color: GameButtonColor;
}>;

const pickRandomColor = (colors: GameButtonColor[]) => {
  return colors[Math.floor(Math.random() * 1000) % colors.length];
};

const pickNextColor = (prevColor: GameButtonColor) => {
  // Prevent picking the same color again
  const nonSameColors = Object.values(GameButtonColor).filter((color) => {
    return color !== prevColor;
  });
  // Randomly pick one
  return pickRandomColor(nonSameColors);
};

const sendTick = (prevColor: GameButtonColor) => {
  const nextColor = pickNextColor(prevColor);
  const tick: TickEvent = new CustomEvent("tick", {
    detail: { color: nextColor },
  });
  document.dispatchEvent(tick);
  return nextColor;
};

const scheduleTick = (prevColor: GameButtonColor, intervalInMs: number) => {
  setTimeout(() => {
    const nextColor = sendTick(prevColor);
    scheduleTick(nextColor, (intervalInMs - 150) * SPEED_UP_INTERVAL + 150);
  }, intervalInMs);
};

scheduleTick(
  pickRandomColor(Object.values(GameButtonColor)),
  INITIAL_TICK_INTERVAL
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
