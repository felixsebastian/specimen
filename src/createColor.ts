import convert from "color-convert";

export default (hex?: string) => ({
  hex,
  get s() {
    return this.toString();
  },
  toString: function () {
    return this.hex;
  },
  css: function () {
    return this.toString();
  },
  rgba: function (v: number) {
    return (
      this.hex && `rgba(${convert.hex.rgb(this.hex.slice(1)).join(", ")}, ${v})`
    );
  },
});
