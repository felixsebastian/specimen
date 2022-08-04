import { Sizes } from "../units/tshirts";
export * from "@emotion/react";

interface Size {
  px: number;
}

interface Color {
  hex: string;
  rgba: string;
}

interface Font {
  name: string;
  metrics?: any;
}

declare module "@emotion/react" {
  export interface Theme {
    size: (n?: Sizes) => Size;
    fontSize: (n?: Sizes) => Size;
    shadow: (n?: Sizes) => string;
    color: (n?: unknown) => Color;
    defaultFont: string;
    fonts: Record<string, Font>;
  }
}
