import useSs, { SsProps } from "../useSs";
import InlineStyle from "./InlineStyle";
import useStyleCss from "./useStyleCss";
import { css } from "@emotion/react";
import WithChildren from "../WithChildren";
import { Ref, forwardRef } from "react";

const ssProps = ["px", "pl", "pr", "mx", "ml", "mr"] as const;

interface Props
  extends Pick<SsProps, typeof ssProps[number]>,
    InlineStyle,
    WithChildren {
  className?: string;
}

const Span = (props: Props, ref: Ref<HTMLSpanElement>) => {
  const ss = useSs(props);
  const styleCss = useStyleCss(props);

  return (
    <span ref={ref} css={css(ss, styleCss)} className={props.className}>
      {props.children}
    </span>
  );
};

export default forwardRef(Span);
