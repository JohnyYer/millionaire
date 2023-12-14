import Link from "next/link";

function Finish() {
  return (
    <div>
      <p>Total score:</p>
      <h1>$8,000 earned</h1>
      <Link href="/">Try again</Link>
    </div>
  );
}

export default Finish;
