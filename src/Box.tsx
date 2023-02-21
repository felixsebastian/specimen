import { jsx } from "@emotion/react";
import { Ref, forwardRef } from "react";
import getHtmlAttributes from "./getHtmlAttributes";
import useSs, { SsProps } from "./useSs";
import WithChildren from "./WithChildren";
import WithHtmlAttributes from "./WithHtmlAttributes";

export interface Props extends SsProps, WithHtmlAttributes, WithChildren {
  as?: string;
  handleClick?: (e: MouseEvent) => void;
  testId?: string;
}

export type BoxProps = Props;

const Box = (props: Props, ref: Ref<unknown>) => {
  const ss = useSs(props);

  return jsx(
    props.as ?? "div",
    {
      ...getHtmlAttributes(props),
      className: props.className,
      "data-testid": props.testId,
      onClick: props.handleClick,
      css: ss,
      ref,
    },
    props.children
  );
};

export default forwardRef(Box);
