import convert from "color-convert";

export default class HSLColor {
  h!: number;
  s!: number;
  l!: number;
  o!: number;

  constructor(h: number, s: number, l: number, o = 1) {
    this.h = h;
    this.s = s;
    this.l = l;
    this.o = o;
  }

  setOpacity(o: number) {
    this.o = o;
  }

  asRGB() {
    return convert.hsl.rgb([this.h, this.s, this.l]);
  }

  toString() {
    const rgb = this.asRGB();
    if (this.o == 1) return `rgb(${rgb.join(",")})`;
    return `rgba(${rgb.join(",")},${this.o})`;
  }
}
