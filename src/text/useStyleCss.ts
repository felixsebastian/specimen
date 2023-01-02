import { CSSObject } from "@emotion/react";
import useTheme from "../useTheme";
import { Style } from "./InlineStyle";
import weights from "./weights";

const useStyleCss = (style: Style): CSSObject => {
  const { color } = useTheme();

  let weight;

  if (style.bold) {
    weight = weights.bold;
  } else {
    weight = style.weight && weights[style.weight];
  }

  return {
    color: color(style.color ?? "text").hex,
    fontWeight: weight,
    textDecoration: style.underline ? "underline" : undefined,
    fontStyle: style.italic ? "italic" : "normal",
  };
};

export default useStyleCss;
