import { Sizes } from "../units/tshirts";
export * from "@emotion/react";

interface Size {
  px: number;
}

declare module "@emotion/react" {
  export interface Theme {
    size: (n?: Sizes) => Size;
    fontSize: (n?: Sizes) => Size;
    shadow: (n?: Sizes) => string;
    color: (n?: unknown) => string;
  }
}
