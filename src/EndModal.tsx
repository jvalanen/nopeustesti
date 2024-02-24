import ScoreCounter from "./ScoreCounter";

interface EndModalProps {
  score: number;
}

function EndModal({ score }: EndModalProps) {
  return (
    <div className="w-full flex flex-col items-center py-6">
      <div className="py-8 text-5xl md:text-6xl font-bold">Game over!</div>
      <div className="text-center">
        <p className="text-xl md:text-2xl p-8">Your final score was</p>
        <ScoreCounter score={score} />
      </div>
      <div className="mt-16 underline">
        <a href="/">Back to main page</a>
      </div>
    </div>
  );
}

export default EndModal;
