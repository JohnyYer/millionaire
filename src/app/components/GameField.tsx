"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { UseGameContext } from "@/app/context/game-context";
import AnswerBlock from "./AnswerBlock";
import QUESTIONS_ITARATOR from "../constants";

function GameField() {
  const router = useRouter();
  const { currentQuestion, gameQuestions, nextQuestion } = UseGameContext();

  const [userAnswer, setUserAnswer] = useState<null | number>(null);

  const selectAnswer = (index: number) => {
    setUserAnswer(index);

    if (gameQuestions.questions[currentQuestion].correct === index) {
      setUserAnswer(null);
      nextQuestion();
    } else {
      router.push("/finish");
    }
  };

  const answerBlockType = useCallback(
    (index: number) => {
      if (userAnswer === index) {
        if (gameQuestions.questions[currentQuestion].correct === userAnswer) {
          return "correct";
        }

        if (gameQuestions.questions[currentQuestion].correct !== userAnswer) {
          return "wrong";
        }

        return "selected";
      }

      return "inactive";
    },
    [userAnswer, gameQuestions, currentQuestion]
  );

  return (
    // TODO: move all styles from page to components module
    <div className="play-area__board">
      <h2 className="play-area__board-question">
        {gameQuestions.questions[currentQuestion].question}
      </h2>

      <div className="play-area__board-answers">
        {gameQuestions.questions[currentQuestion].content.map(
          (answer, index) => (
            <div
              key={answer}
              className="play-area__board-answers-block"
              onClick={() => selectAnswer(index)}
              onKeyDown={() => selectAnswer(index)}
              role="presentation"
            >
              <AnswerBlock type={answerBlockType(index)} />
              <div className="play-area__board-answers-block-text">
                <span>{QUESTIONS_ITARATOR[index]}</span>
                {answer}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default GameField;
