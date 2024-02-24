import { useState } from "react";
import Game from "./Game.tsx";
import EndModal from "./EndModal.tsx";

function App() {
  const [gameEnd, setGameEnd] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleGameEnd = (score: number) => {
    setGameEnd(true);
    setFinalScore(score);
  };

  return (
    <div className="w-full flex items-center border-4 border-slate-300 py-6">
      {gameEnd ? (
        <EndModal score={finalScore} />
      ) : (
        <Game onGameEnd={handleGameEnd} />
      )}
    </div>
  );
}

export default App;
