import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const tick = new CustomEvent("tick", {});

const sendTick = () => {
  setTimeout(() => {
    document.dispatchEvent(tick);
    sendTick();
  }, 500);
};

sendTick();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
