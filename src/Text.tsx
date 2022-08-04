import { jsx, useTheme, css } from "@emotion/react";
import { pick } from "lodash";
import { createContext, ReactNode, useContext } from "react";
import useSs, { SsProps } from "./useSs";
import { createStyleObject } from "@capsizecss/core";
import { Sizes } from "./units/tshirts";

const ssProps = ["bg", "radius"] as const;

const weights = {
  ultraBlack: 900,
  black: 800,
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  thin: 200,
  ultraThin: 100,
};

type Weight = keyof typeof weights;

interface TextProps {
  color?: string;
  size?: Sizes;
  weight?: Weight;
  underline?: boolean;
}

interface Props extends Pick<SsProps, typeof ssProps[number]>, TextProps {
  children: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  font?: string;
}

const textContext = createContext<TextProps>({});
const Provider = textContext.Provider;

interface ProviderProps extends TextProps {
  children: ReactNode;
}

export const TextProvider = ({ children, ...props }: ProviderProps) => (
  <Provider value={props}>{children}</Provider>
);

export default (props: Props) => {
  const { color, fontSize, defaultFont, fonts } = useTheme();
  const ss = useSs(pick(props, ssProps));
  const contextProps = useContext(textContext);
  props = { ...contextProps, ...props };
  const { weight, headingLevel } = props;
  const font = fonts[props.font ?? defaultFont];

  return jsx(headingLevel ? `h${headingLevel}` : "p", {
    children: props.children,
    css: css({
      ...ss,
      fontFamily: font.name,
      display: "block",
      margin: 0,
      fontWeight: weight && weights[weight],
      textDecoration: props.underline ? "underline" : undefined,
      color: color(props.color ?? "text").hex,
      ...createStyleObject({
        capHeight: fontSize(props.size).px,
        lineGap: fontSize(props.size).px,
        fontMetrics: font.metrics,
      }),
    }),
  });
};
