import "./page.scss";
import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page__image">
        <Image
          src="/thumbsUp.svg"
          alt="Thumbs Up"
          fill
          // sizes="(max-width: 768px) 300px"
        />
      </div>

      <div className="home-page__right">
        <h1>Who wants to be a millionaire?</h1>
        <ButtonLink text="Start" href="/play" />
      </div>
    </div>
  );
}
