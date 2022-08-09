export type Sizes =
  | "none"
  | "sm6"
  | "sm5"
  | "sm4"
  | "sm3"
  | "sm2"
  | "sm"
  | "md"
  | "lg"
  | "lg2"
  | "lg3"
  | "lg4"
  | "lg5"
  | "lg6"
  | "lg7"
  | "lg8"
  | "lg9"
  | "lg10"
  | "lg11"
  | "lg12"
  | "lg13"
  | "lg14"
  | "lg15"
  | "lg16";

export default (s: string) => {
  if (!s) return null;

  const lut = {
    none: null,
    sm: -1,
    md: 0,
    lg: 1,
  };

  if (lut[s] !== undefined) return lut[s];
  const xln = s.match(/^lg([0-9]+)$/);
  const xsn = s.match(/^sm([0-9]+)$/);
  if (xln) return Number(xln[1]);
  if (xsn) return Number(xsn[1]) * -1;
  throw new Error("Invalid size: " + s);
};
