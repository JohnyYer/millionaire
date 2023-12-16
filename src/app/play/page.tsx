import GameField from "../components/GameField";
import ScoreBlock from "../components/ScoreBlock";
import "./page.scss";

function Play() {
  const questions = [
    {
      price: "$1",
    },
    {
      price: "$2,000,000",
    },
    {
      price: "$3,000,000",
    },
    {
      price: "$4,000,000",
    },
  ];

  return (
    <div className="play-area">
      <GameField />
      <div className="play-area__sidebar">
        <div className="play-area__sidebar-score">
          {questions.map((question) => (
            <div
              key={question.price}
              className="play-area__sidebar-score-block"
            >
              <ScoreBlock type="future" />
              <div className="play-area__sidebar-score-block-text">
                {question.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Play;
