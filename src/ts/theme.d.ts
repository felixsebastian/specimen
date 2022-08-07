import { Sizes } from "../units/tshirts";
import { Pixels, Color, Font } from "../types";
export * from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    size: (query?: string) => Pixels;
    s: Record<Sizes, string>;
    fontSize: (n?: Sizes) => Pixels;
    shadow: (n?: Sizes) => string;
    color: (n?: unknown) => Color;
    c: Record<string, string>;
    defaultFont: string;
    fonts: Record<string, Font>;
  }
}
