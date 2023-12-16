import GameField from "../components/GameField";
import ScoreBoard from "../components/ScoreBoard";
import "./page.scss";

function Play() {
  return (
    <div className="play-area">
      <GameField />
      <div className="play-area__sidebar">
        <div className="play-area__sidebar-score">
          <ScoreBoard />
        </div>
      </div>
    </div>
  );
}

export default Play;
