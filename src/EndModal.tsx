import ScoreCounter from "./ScoreCounter";

interface EndModalProps {
  score: number;
}

function EndModal({ score }: EndModalProps) {
  return (
    <div className="w-full flex flex-col items-center py-2">
      <div className="text-3xl font-bold">Game over!</div>
      <div className="text-center">
        <p className="text-l md:text-l p-4">Your final score was</p>
        <ScoreCounter score={score} />
      </div>
      <div className="mt-14 underline">
        <a href="/">Back to the main page</a>
      </div>
    </div>
  );
}

export default EndModal;
