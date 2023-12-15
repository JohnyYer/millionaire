import Link from "next/link";

import styles from "./ButtonLink.module.scss";

type Props = {
  text: string;
  href: string;
};

function ButtonLink({ href, text }: Props) {
  return (
    <Link href={href} className={styles.button}>
      {text}
    </Link>
  );
}

export default ButtonLink;
