import { Sizes } from "./units/tshirts";

export interface Style {
  css: () => string;
}

export interface Pixels extends Style {
  raw: number;
}

export interface Color extends Style {
  hex: string;
  rgba: (opacity: number) => string;
}

export interface Font {
  name: string;
  metrics?: any;
}

export interface Theme extends Record<string, any> {
  size: (query?: string) => Pixels;
  s: Record<Sizes, string>;
  fontSize: (n?: Sizes) => Pixels;
  shadow: (n?: Sizes) => string;
  color: (n?: unknown) => Color;
  c: Record<string, string>;
  defaultFont: string;
  fonts: Record<string, Font>;
}
