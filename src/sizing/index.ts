import { round } from "lodash";

const createSize = (px?: number) => ({
  px,
  get s() {
    return this.toString();
  },
  toString: function toString() {
    if (typeof this.px === "number") return `${this.px}px`;
    else return undefined;
  },
});

export const linearSize = (base: number, coeff: number) => (s: number) =>
  createSize(Math.max(1, round(s * coeff + base)));

export const goldenRatioSize = (s: number) => {
  if (s === null) return createSize(undefined);
  return createSize(round(1.618 ** s * 16, 3));
};
