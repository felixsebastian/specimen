import useTheme from "../useTheme";
import { Style } from "./Style";
import weights from "./weights";

const useStyleCss = (style: Style) => {
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
  };
};

export default useStyleCss;
