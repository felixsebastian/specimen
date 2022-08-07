export type Sizes =
  | "none"
  | "6xs"
  | "5xs"
  | "4xs"
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl"
  | "10xl"
  | "11xl"
  | "12xl"
  | "13xl"
  | "14xl"
  | "15xl"
  | "16xl";

export default (s: string) => {
  if (!s) return null;

  const lut = {
    none: null,
    xs: -2,
    sm: -1,
    md: 0,
    lg: 1,
    xl: 2,
  };

  if (lut[s] !== undefined) return lut[s];
  const xln = s.match(/^([0-9]+)xl$/);
  const xsn = s.match(/^([0-9]+)xs$/);
  if (xln) return Number(xln[1]) + 1;
  if (xsn) return (Number(xsn[1]) + 1) * -1;
  throw new Error("Invalid size: " + s);
};
