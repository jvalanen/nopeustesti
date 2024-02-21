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

  const handleTryAgain = () => {
    setGameEnd(false);
  };

  return gameEnd ? (
    <EndModal score={finalScore} onTryAgain={handleTryAgain} />
  ) : (
    <Game onGameEnd={handleGameEnd} />
  );
}

export default App;
