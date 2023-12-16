"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import GameQuestions from "@/gameConfig.json";

type Question = {
  question: string;
  content: string[];
  correct: number;
  price: number;
};

type GameObject = {
  questions: Question[];
};

type GameContextProviderProps = {
  children: ReactNode;
};

type GameContextT = {
  gameQuestions: GameObject;
  currentQuestion: number;
  nextQuestion: () => void;
  startNewGame: () => void;
  setFinalScore: Dispatch<SetStateAction<number>>;
  finalScore: number;
};

export const GameContext = createContext<GameContextT | null>(null);

export default function GameContextProvider({
  children,
}: GameContextProviderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  const nextQuestion = useCallback(() => {
    setFinalScore(GameQuestions.questions[currentQuestion].price);
    setCurrentQuestion((current) => current + 1);
  }, [setCurrentQuestion, setFinalScore, currentQuestion]);

  const startNewGame = () => {
    setFinalScore(0);
    setCurrentQuestion(0);
  };

  return (
    <GameContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        gameQuestions: GameQuestions,
        currentQuestion,
        nextQuestion,
        startNewGame,
        setFinalScore,
        finalScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function UseGameContext() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGameContext must be used within a GameContextProvider");
  }

  return context;
}
