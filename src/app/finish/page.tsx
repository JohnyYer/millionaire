"use client";

import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink";
import "./page.scss";
import { UseGameContext } from "../context/game-context";

function Finish() {
  const { finalScore } = UseGameContext();

  return (
    <div className="finish-page">
      <div className="finish-page__image">
        <Image
          src="/thumbsUp.svg"
          alt="Thumbs Up"
          fill
          // sizes="(max-width: 768px) 300px"
        />
      </div>

      <div className="finish-page__right">
        <div className="finish-page__right-score">
          <p>Total score:</p>
          <h1>${finalScore} earned</h1>
        </div>

        <ButtonLink href="/" text="Try again" />
      </div>
    </div>
  );
}

export default Finish;
