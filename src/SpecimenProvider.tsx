import { ThemeProvider } from "@emotion/react";
import { ReactNode, useMemo } from "react";
import { Theme, Color, Pixels, Style } from "./types";
import { Sizes } from "./units/tshirts";

const createProxy = <T extends Style>(
  fn: (query?: string) => T
): Record<Sizes, string> => {
  const proxy = new Proxy(
    {},
    {
      get(_, query) {
        if (typeof query === "symbol") throw new Error("Invalid query");

        try {
          return fn(query).toString();
        } catch {
          return query;
        }
      },
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return proxy as any;
};

type InputTheme = Omit<Theme, "s" | "c">;

const processTheme = (theme: InputTheme) =>
  ({
    ...theme,
    s: createProxy<Pixels>(theme.size),
    c: createProxy<Color>(theme.color),
  } as Theme);

interface Props {
  children?: ReactNode;
  theme: InputTheme;
}

const SpecimenProvider = ({ theme, ...props }: Props) => {
  const processedTheme = useMemo(() => processTheme(theme), [theme]);
  return <ThemeProvider theme={processedTheme}>{props.children}</ThemeProvider>;
};

export default SpecimenProvider;
