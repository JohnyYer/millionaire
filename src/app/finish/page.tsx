import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import "./page.scss";

function Finish() {
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
          <h1>$8,000 earned</h1>
        </div>

        <ButtonLink href="/" text="Try again" />
      </div>
    </div>
  );
}

export default Finish;
