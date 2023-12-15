import colors from "../styles/colors.module.scss";

const TYPES = {
  selected: {
    fill: colors.selectedFill,
    stroke: colors.selectedStroke,
  },
  correct: {
    fill: colors.correctFill,
    stroke: colors.correctStroke,
  },
  wrong: {
    fill: colors.wrongFill,
    stroke: colors.wrongStroke,
  },
};

type Props = {
  type: keyof typeof TYPES;
};

function AnswerBlock({ type }: Props) {
  return (
    <svg
      width="405"
      height="72"
      viewBox="0 0 405 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M388 36L405 36" stroke={TYPES[type].stroke} />
      <path d="M0 36L17 36" stroke={TYPES[type].stroke} />
      <path
        d="M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z"
        fill={TYPES[type].fill}
        stroke={TYPES[type].stroke}
      />
    </svg>
  );
}

export default AnswerBlock;
