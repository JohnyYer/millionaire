import AnswerBlock from "@/components/AnswerBlock";
import "./page.scss";

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

  return (
    <div className="play-area">
      <div className="play-area__board">
        <h2 className="play-area__board-question">
          How old your elder brother was 10 years before you was born, mate?
        </h2>

        <div className="play-area__board-answers">
          {answers.map((answer) => (
            <div key={answer.text} className="play-area__board-answers-block">
              <AnswerBlock type="correct" />
            </div>
          ))}
        </div>
      </div>

      <div className="play-area__score-sidebar">score</div>
    </div>
  );
}

export default Play;
