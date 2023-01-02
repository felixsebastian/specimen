import useSs, { SsProps } from "../useSs";
import InlineStyle from "./InlineStyle";
import useStyleCss from "./useStyleCss";
import { css } from "@emotion/react";
import WithChildren from "../WithChildren";

const ssProps = ["px", "pl", "pr", "mx", "ml", "mr"] as const;

interface Props
  extends Pick<SsProps, typeof ssProps[number]>,
    InlineStyle,
    WithChildren {
  className?: string;
}

export default (props: Props) => {
  const ss = useSs(props);
  const styleCss = useStyleCss(props);

  return (
    <span css={css(ss, styleCss)} className={props.className}>
      {props.children}
    </span>
  );
};
