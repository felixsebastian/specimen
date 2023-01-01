import useTheme from "../useTheme";
import { Style } from "./Style";
import weights from "./weights";

const useStyleCss = ({ weight, ...style }: Style) => {
  const { color } = useTheme();

  return {
    color: color(style.color ?? "text").hex,
    fontWeight: weight && weights[weight],
    textDecoration: style.underline ? "underline" : undefined,
  };
};

export default useStyleCss;
