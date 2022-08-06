import { css, jsx } from "@emotion/react";
import { SerializedStyles } from "@emotion/react";
import { pick } from "lodash";
import { forwardRef, HTMLProps, ReactNode } from "react";
import useSs, { SsProps } from "./useSs";

interface Props extends SsProps, HTMLProps<HTMLElement> {
  children?: ReactNode;
  css?: SerializedStyles;
  as?: string;
  handleClick?: (e: MouseEvent) => void;
}

export default forwardRef((props: Props, ref) => {
  const ss = useSs(props);

  return jsx(props.as ?? "div", {
    ...pick(props, ["children", "className", "id"]),
    onClick: props.handleClick,
    ref,
    css: css(ss),
  });
});
