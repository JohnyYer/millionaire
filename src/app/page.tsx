"use client";

import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink";
import { UseGameContext } from "./context/game-context";

export default function Home() {
  const { startNewGame } = UseGameContext();
  return (
    <div className="base-layout gradient">
      <div className="base-layout__image">
        <Image
          src="/thumbsUp.svg"
          alt="Thumbs Up"
          fill
          // sizes="(max-width: 768px) 300px"
        />
      </div>

      <div className="base-layout__right">
        <h1>Who wants to be a millionaire?</h1>
        <ButtonLink text="Start" href="/play" onClick={() => startNewGame()} />
      </div>
    </div>
  );
}
