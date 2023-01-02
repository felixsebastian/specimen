import { jsx, css } from "@emotion/react";
import useTheme from "../useTheme";
import { createContext, useContext } from "react";
import useSs, { SsProps } from "../useSs";
import { createStyleObject } from "@capsizecss/core";
import { Style } from "./Style";
import isInlineContext from "./isInlineContext";
import { TShirtSizes } from "../units/tshirts";
import useStyleCss from "./useStyleCss";
import WithChildren from "../WithChildren";
import WithHtmlAttributes from "../WithHtmlAttributes";
import getHtmlAttributes from "../getHtmlAttributes";

const ssProps = ["bg", "radius"] as const;
const IsInlineProvider = isInlineContext.Provider;
type IntrinsicElementNames = keyof JSX.IntrinsicElements;

interface Props
  extends Pick<SsProps, typeof ssProps[number]>,
    Style,
    WithChildren,
    WithHtmlAttributes {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  font?: string;
  size?: TShirtSizes;
  align?: "left" | "center" | "right";
  as?: IntrinsicElementNames;
}

export type TextProps = Props;
const textContext = createContext<Style>({});
const Provider = textContext.Provider;

export const TextProvider = ({ children, ...props }: Style & WithChildren) => (
  <Provider value={props}>{children}</Provider>
);

export default (props: Props) => {
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
          css: css(ss, styleCss, {
            fontFamily: font.name,
            textAlign: props.align,
            ...createStyleObject({
              capHeight: fontSize(size).raw,
              lineGap: fontSize(size).raw,
              fontMetrics: font.metrics,
            }),
          }),
        },
        props.children
      )}
    </IsInlineProvider>
  );
};
