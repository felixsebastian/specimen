import { jsx, css } from "@emotion/react";
import useTheme from "../useTheme";
import { createContext, useContext } from "react";
import useSs, { SsProps } from "../useSs";
import { createStyleObject } from "@capsizecss/core";
import isInlineContext from "./isInlineContext";
import useStyleCss from "./useStyleCss";
import WithChildren from "../WithChildren";
import WithHtmlAttributes from "../WithHtmlAttributes";
import getHtmlAttributes from "../getHtmlAttributes";
import BlockStyle from "./BlockStyle";
import { forwardRef } from "react";

const ssProps = ["bg", "radius"] as const;
const IsInlineProvider = isInlineContext.Provider;
type IntrinsicElementNames = keyof JSX.IntrinsicElements;

interface Props
  extends Pick<SsProps, typeof ssProps[number]>,
    WithChildren,
    WithHtmlAttributes,
    BlockStyle {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  lineGap?: number;
  as?: IntrinsicElementNames;
}

export type TextProps = Props;
const textContext = createContext<BlockStyle>({});
const Provider = textContext.Provider;

export const TextProvider = ({
  children,
  ...props
}: BlockStyle & WithChildren) => <Provider value={props}>{children}</Provider>;

export default forwardRef(({ lineGap = 1, ...props }: Props, ref) => {
  const { fontSize, defaultFont, fonts } = useTheme();
  const ss = useSs(props);
  const contextProps = useContext(textContext);
  props = { ...contextProps, ...props };
  const { headingLevel } = props;
  const font = fonts[props.font ?? defaultFont];
  const size = props.size ?? "md";
  const styleCss = useStyleCss(props);
  if (!props.children) return null;

  return (
    <IsInlineProvider value={true}>
      {jsx(
        props.as ?? (headingLevel ? `h${headingLevel}` : "p"),
        {
          ...getHtmlAttributes(props),
          ref,
          css: css(ss, styleCss, {
            fontFamily: font.name,
            textAlign: props.align,
            ...createStyleObject({
              capHeight: fontSize(size).raw,
              lineGap: fontSize(size).raw * lineGap,
              fontMetrics: font.metrics,
            }),
          }),
        },
        props.children
      )}
    </IsInlineProvider>
  );
});
