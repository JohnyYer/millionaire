"use client";

import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink";
import { UseGameContext } from "../context/game-context";

function Finish() {
  const { finalScore } = UseGameContext();

  return (
    <div className="base-layout">
      <div className="base-layout__image">
        <Image
          src="/thumbsUp.svg"
          alt="Thumbs Up"
          fill
          // sizes="(max-width: 768px) 300px"
        />
      </div>

      <div className="base-layout__right">
        <div className="base-layout__right-score">
          <p>Total score:</p>
          <h1>${finalScore} earned</h1>
        </div>

        <ButtonLink href="/" text="Try again" />
      </div>
    </div>
  );
}

export default Finish;
