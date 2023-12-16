"use client";

import { useCallback } from "react";
import { UseGameContext } from "../context/game-context";
import ScoreBlock from "./ScoreBlock";

function ScoreBoard() {
  const { gameQuestions, currentQuestion } = UseGameContext();

  const scoreBlockType = useCallback(
    // TODO: refactor; move to constants
    (index: number) => {
      if (currentQuestion === index) {
        return "current";
      }
      if (currentQuestion > index) {
        return "past";
      }
      return "future";
    },
    [currentQuestion]
  );

  return (
    <>
      {gameQuestions.questions.map((question, index) => (
        <div
          key={question.price}
          className={`play-area__sidebar-score-block ${scoreBlockType(index)}`}
        >
          <ScoreBlock type={scoreBlockType(index)} />
          <div className="play-area__sidebar-score-block-text">
            ${question.price}
          </div>
        </div>
      ))}
    </>
  );
}

export default ScoreBoard;
