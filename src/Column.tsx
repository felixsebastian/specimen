import useTheme from "./useTheme";
import { useContext } from "react";
import { gapContext } from "./Row";

const roundDown = (n: number, precision: number) => {
  const coeff = 10 ** precision;
  return Math.floor(n * coeff) / coeff;
};

const formatPercentage = (n: number) => n * 100 + "%";

const Column = ({ width = "auto", ...props }: any) => {
  const { size } = useTheme();
  const gap = useContext(gapContext);
  if (typeof width === "number") width = formatPercentage(roundDown(width, 5));

  let flexGrow, flexBasis;

  if (width === "auto") {
    flexGrow = 0;
  } else if (width === "expand") {
    flexGrow = 1;
    flexBasis = 0;
  } else {
    flexGrow = 0;
    flexBasis = width;
  }

  return (
    <div
      css={{
        padding: `0 ${size(gap).raw / 2}px`,
        flexGrow,
        flexBasis,
        flexShrink: 0,
      }}
    >
      {props.children}
    </div>
  );
};

export default Column;
