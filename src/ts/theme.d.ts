import { Theme as RealTheme } from "../types";
export * from "@emotion/react";

declare module "@emotion/react" {
  let Theme: RealTheme;
}
