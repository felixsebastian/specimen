import { round, isNull } from "lodash";

// {s, space, c, color}
// p="sm" p={space('sm').raw + 2}

export const createSize = (pixels: null | number) => ({
  raw: isNull(pixels) ? null : Math.max(1, round(pixels)),
  get s() {
    return this.toString();
  },
  toString: function toString(): string | undefined {
    if (typeof this.raw === "number") return `${this.raw}px`;
    else return undefined;
  },
  css: function () {
    return this.toString();
  },
});

export const linearSize = (base: number, coeff: number) => (s: number) =>
  createSize(s === null ? null : s * coeff + base);

export const goldenRatioSize = (s: number) =>
  createSize(s === null ? null : round(1.618 ** s * 16, 3));
