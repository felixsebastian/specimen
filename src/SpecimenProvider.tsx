import { ThemeProvider } from "@emotion/react";
import { ReactNode, useMemo } from "react";
import navigationContext, { NavigationFn } from "./navigationContext";
import { Theme, Color, Pixels, Style } from "./types";
import { TShirtSizes } from "./units/tshirts";

const NavigationProvider = navigationContext.Provider;

const createProxy = <T extends Style>(
  fn: (query?: string) => T
): Record<TShirtSizes, string> => {
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
  navigationFn?: NavigationFn;
}

const SpecimenProvider = ({ theme, ...props }: Props) => {
  const processedTheme = useMemo(() => processTheme(theme), [theme]);
  return (
    <NavigationProvider value={props.navigationFn ?? null}>
      <ThemeProvider theme={processedTheme}>{props.children}</ThemeProvider>
    </NavigationProvider>
  );
};

export default SpecimenProvider;
