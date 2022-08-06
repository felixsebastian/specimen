import { useTheme } from "@emotion/react";
import { Sizes } from "./units/tshirts";

export interface SsProps {
  w?: Sizes;
  h?: Sizes;
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
  const { size, color, shadow } = useTheme();

  return {
    display: css.d,
    width: size(css.w).px,
    height: size(css.h).px,
    paddingTop: size(css.pt ?? py ?? p).px,
    paddingBottom: size(css.pb ?? py ?? p).px,
    paddingLeft: size(css.pl ?? px ?? p).px,
    paddingRight: size(css.pr ?? px ?? p).px,
    marginTop: size(css.mt ?? my ?? m).px,
    marginBottom: size(css.mb ?? my ?? m).px,
    marginLeft: size(css.ml ?? mx ?? m).px,
    marginRight: size(css.mr ?? mx ?? m).px,
    backgroundColor: color(css.bg).hex,
    borderRadius: size(css.radius).px,
    boxShadow: shadow(css.shadow),
  };
};
