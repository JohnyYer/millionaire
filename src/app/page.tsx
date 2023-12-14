import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Who wants to be a millionaire?</h1>
      <Link href="/play">Start</Link>
    </div>
  );
}
