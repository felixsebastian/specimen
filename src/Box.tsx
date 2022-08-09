import { css, jsx } from "@emotion/react";
import { omit } from "lodash";
import { forwardRef, HTMLProps, ReactNode } from "react";
import useSs, { SsProps } from "./useSs";

const ssProps = [
  "w",
  "h",
  "p",
  "px",
  "py",
  "pt",
  "pb",
  "pl",
  "pr",
  "m",
  "mx",
  "my",
  "mt",
  "mb",
  "ml",
  "mr",
  "bg",
  "radius",
  "boxShadow",
  "shadow",
  "d",
];

export interface Props extends SsProps, Omit<HTMLProps<HTMLElement>, "ref"> {
  children?: ReactNode;
  as?: string;
  handleClick?: (e: MouseEvent) => void;
}

const propsToOmit = ["handleClick", "as", ...ssProps];

export default forwardRef((props: Props, ref) => {
  const ss = useSs(props);

  return jsx(props.as ?? "div", {
    ...omit(props, propsToOmit),
    onClick: props.handleClick,
    ref,
    css: css(ss),
  });
});

export type BoxProps = Props;
