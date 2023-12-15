import AnswerBlock from "@/components/AnswerBlock";
import "./page.scss";
import ScoreBlock from "@/components/ScoreBlock";

function Play() {
  const answers = [
    {
      text: "10 years",
      isCorrect: true,
    },
    {
      text: "10 years",
      isCorrect: true,
    },
    {
      text: "10 years",
      isCorrect: true,
    },
    {
      text: "10 years",
      isCorrect: true,
    },
  ];

  const questions = [
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
    {
      price: "$1,000,000",
    },
  ];

  return (
    <div className="play-area">
      <div className="play-area__board">
        <h2 className="play-area__board-question">
          How old your elder brother was 10 years before you was born, mate?
        </h2>

        <div className="play-area__board-answers">
          {answers.map((answer) => (
            <div key={answer.text} className="play-area__board-answers-block">
              <AnswerBlock type="inactive" />
              <div className="play-area__board-answers-block-text">
                <span>A</span>
                {answer.text}
              </div>
            </div>
          ))}
        </div>
      </div>

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
