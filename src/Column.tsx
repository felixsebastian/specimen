import useTheme from "./useTheme";
import { forwardRef, Ref, useContext } from "react";
import { gapContext } from "./Row";
import WithChildren from "./WithChildren";
import { floor, isNumber } from "lodash";

const formatPercentage = (n: number) => n * 100 + "%";

interface Props extends WithChildren {
  width?: number | "auto" | "expand";
}

const Column = (
  { width = "auto", ...props }: Props,
  ref: Ref<HTMLDivElement>
) => {
  const { size } = useTheme();
  const gap = useContext(gapContext);
  let flexGrow, flexBasis;

  if (width === "auto") {
    flexGrow = 0;
  } else if (width === "expand") {
    flexGrow = 1;
    flexBasis = 0;
  } else {
    flexGrow = 0;
    flexBasis = isNumber(width) ? formatPercentage(floor(width, 5)) : width;
  }

  return (
    <div
      ref={ref}
      css={{
        padding: `0 ${size(gap).raw / 2}px`,
        flexGrow,
        flexBasis,
        flexShrink: 1,
      }}
    >
      {props.children}
    </div>
  );
};

export default forwardRef(Column);
