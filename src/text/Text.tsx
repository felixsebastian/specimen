import { jsx, css } from "@emotion/react";
import useTheme from "../useTheme";
import { omit, pick } from "lodash";
import { createContext, HTMLProps, useContext } from "react";
import useSs, { SsProps } from "../useSs";
import { createStyleObject } from "@capsizecss/core";
import { Style } from "./Style";
import isTextContext from "./isTextContext";
import { TShirtSizes } from "../units/tshirts";
import useStyleCss from "./useStyleCss";
import WithChildren from "../WithChildren";

const ssProps = ["bg", "radius"] as const;

const IsTextProvider = isTextContext.Provider;

interface Props
  extends Pick<SsProps, typeof ssProps[number]>,
    Style,
    Omit<HTMLProps<HTMLElement>, "size">,
    WithChildren {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  font?: string;
  size?: TShirtSizes;
  align?: "left" | "center" | "right";
  as?: string;
}

export type TextProps = Props;

const textContext = createContext<Style>({});
const Provider = textContext.Provider;

export const TextProvider = ({ children, ...props }: Style & WithChildren) => (
  <Provider value={props}>{children}</Provider>
);

export default (props: Props) => {
  const { fontSize, defaultFont, fonts } = useTheme();
  const ss = useSs(pick(props, ssProps));
  const contextProps = useContext(textContext);
  props = { ...contextProps, ...props };
  const { headingLevel } = props;
  const font = fonts[props.font ?? defaultFont];
  const size = props.size ?? "md";
  const styleCss = useStyleCss(props);
  if (!props.children) return null;

  return (
    <IsTextProvider value={true}>
      {jsx(props.as ?? (headingLevel ? `h${headingLevel}` : "p"), {
        ...omit(props, ssProps),
        css: css(ss, styleCss, {
          fontFamily: font.name,
          textAlign: props.align,
          ...createStyleObject({
            capHeight: fontSize(size).raw,
            lineGap: fontSize(size).raw,
            fontMetrics: font.metrics,
          }),
        }),
      })}
    </IsTextProvider>
  );
};
