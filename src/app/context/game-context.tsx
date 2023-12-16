"use client";

import {
  ReactNode,
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
};

export const GameContext = createContext<GameContextT | null>(null);

export default function GameContextProvider({
  children,
}: GameContextProviderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = useCallback(
    () => setCurrentQuestion((current) => current + 1),
    [setCurrentQuestion]
  );

  return (
    <GameContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        gameQuestions: GameQuestions,
        currentQuestion,
        nextQuestion,
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
