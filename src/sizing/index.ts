import { round, isNull } from "lodash";

export const createSize = (px: null | number) => ({
  px: isNull(px) ? null : Math.max(1, round(px)),
  get s() {
    return this.toString();
  },
  toString: function toString() {
    if (typeof this.px === "number") return `${this.px}px`;
    else return undefined;
  },
});

export const linearSize = (base: number, coeff: number) => (s: number) =>
  createSize(s === null ? null : s * coeff + base);

export const goldenRatioSize = (s: number) =>
  createSize(s === null ? null : round(1.618 ** s * 16, 3));
