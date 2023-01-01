import { pick } from "lodash";
import useSs, { SsProps } from "../useSs";
import { Style } from "./Style";
import useStyleCss from "./useStyleCss";
import { css } from "@emotion/react";
import WithChildren from "../WithChildren";

const ssProps = ["px", "pl", "pr", "mx", "ml", "mr"] as const;

export default (
  props: Pick<SsProps, typeof ssProps[number]> & Style & WithChildren
) => {
  const ss = useSs(pick(props, ssProps));
  const styleCss = useStyleCss(props);
  return <span css={css(ss, styleCss)}>{props.children}</span>;
};
