import useTheme from "./useTheme";
import { TShirtSizes } from "./units/tshirts";

export interface SsProps {
  w?: TShirtSizes | "full";
  h?: TShirtSizes | "full";
  p?: TShirtSizes;
  px?: TShirtSizes;
  py?: TShirtSizes;
  pt?: TShirtSizes;
  pb?: TShirtSizes;
  pl?: TShirtSizes;
  pr?: TShirtSizes;
  m?: TShirtSizes;
  mx?: TShirtSizes;
  my?: TShirtSizes;
  mt?: TShirtSizes;
  mb?: TShirtSizes;
  ml?: TShirtSizes;
  mr?: TShirtSizes;
  radius?: TShirtSizes;
  shadow?: TShirtSizes;
  bg?: string;
  d?: string;
}

export default ({ p, m, px, py, mx, my, ...css }: SsProps) => {
  const { s, c, shadow } = useTheme();

  return {
    display: css.d,
    width: css.w === "full" ? "100%" : s[css.w ?? ""],
    height: css.h === "full" ? "100%" : s[css.h ?? ""],
    paddingTop: s[css.pt ?? py ?? p ?? ""],
    paddingBottom: s[css.pb ?? py ?? p ?? ""],
    paddingLeft: s[css.pl ?? px ?? p ?? ""],
    paddingRight: s[css.pr ?? px ?? p ?? ""],
    marginTop: s[css.mt ?? my ?? m ?? ""],
    marginBottom: s[css.mb ?? my ?? m ?? ""],
    marginLeft: s[css.ml ?? mx ?? m ?? ""],
    marginRight: s[css.mr ?? mx ?? m ?? ""],
    borderRadius: s[css.radius ?? ""],
    backgroundColor: c[css.bg ?? ""],
    boxShadow: shadow(css.shadow),
  };
};
