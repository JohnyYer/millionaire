import Link from "next/link";

import styles from "./styles/ButtonLink.module.scss";

type Props = {
  text: string;
  href: string;
  onClick?: () => void;
};

function ButtonLink({ href, text, onClick }: Props) {
  return (
    <Link href={href} className={styles.button} onClick={onClick}>
      {text}
    </Link>
  );
}

export default ButtonLink;
