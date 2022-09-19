import useTheme from "./useTheme";
import { Sizes } from "./units/tshirts";

export interface SsProps {
  w?: Sizes | "full";
  h?: Sizes | "full";
  p?: Sizes;
  px?: Sizes;
  py?: Sizes;
  pt?: Sizes;
  pb?: Sizes;
  pl?: Sizes;
  pr?: Sizes;
  m?: Sizes;
  mx?: Sizes;
  my?: Sizes;
  mt?: Sizes;
  mb?: Sizes;
  ml?: Sizes;
  mr?: Sizes;
  bg?: string;
  radius?: Sizes;
  boxShadow?: Sizes;
  shadow?: Sizes;
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
