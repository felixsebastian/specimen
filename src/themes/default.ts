import { memoize } from "lodash";
import HSLColor from "./HSLColor";

type Hue<T = never> = "info" | "success" | "warning" | "error" | "link" | T;
type Grayscale = -3 | -2 | -1 | 0 | 1 | 2 | 3;
type Saturation = "dull" | "mid" | "bright";
type Lightness = "dark" | "mid" | "light";
type Opacity = "faint" | "mid" | "opaque";
type Space = number;

type TriadicHue = Hue<"red" | "yellow" | "blue">;

const triadicColors = (hue: number) => {
  return [hue, hue + 120, hue + 240];
};

const triad = triadicColors(5);

// letters are short for red, orange, yellow, green, blue, purple
const colors = {
  info: triad[2],
  success: triad[2],
  error: 0,
  warning: 45,
  link: triad[2],
  blue: triad[2],
  red: triad[0],
  yellow: triad[1],
};

const saturations = {
  dull: 20,
  mid: 50,
  bright: 95,
};

const lightnesses = {
  dark: 20,
  mid: 50,
  light: 95,
};

const opacities = {
  faint: 0.3,
  mid: 0.7,
  opaque: 1,
};

const color = (
  h: TriadicHue,
  s: Saturation,
  l: Lightness,
  o: Opacity = "opaque"
) => new HSLColor(colors[h], saturations[s], lightnesses[l], opacities[o]);

const grayscale = (g: Grayscale) => new HSLColor(0, 0, (g / 6) * 255);

function space(x: Space = 0): number {
  return x * 10;
}

// <Box bg={[]} p={[3, 4]} mt={3} />

export default {
  c: memoize(color),
  g: memoize(grayscale),
  s: memoize(space),
};
