import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ColorEnum } from "./GameButton.tsx";

const tick = new CustomEvent("tick", { detail: { color: ColorEnum.Blue } });

const sendTick = () => {
  setTimeout(() => {
    document.dispatchEvent(tick);
    sendTick();
  }, 500);
};

sendTick();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
