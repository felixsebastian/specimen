import { jsx } from "@emotion/react";
import { omit } from "lodash";
import { forwardRef, HTMLProps } from "react";
import ssProps from "./ssProps";
import useSs, { SsProps } from "./useSs";
import WithChildren from "./WithChildren";

export interface Props
  extends SsProps,
    Omit<HTMLProps<HTMLElement>, "ref">,
    WithChildren {
  as?: string;
  handleClick?: (e: MouseEvent) => void;
  testId?: string;
}

const propsToOmit = [...ssProps, "handleClick", "as", "testId"];
export type BoxProps = Props;

export default forwardRef((props: Props, ref) => {
  const ss = useSs(props);

  return jsx(props.as ?? "div", {
    "data-testid": props.testId,
    onClick: props.handleClick,
    ...omit(props, propsToOmit),
    css: ss,
    ref,
  });
});
