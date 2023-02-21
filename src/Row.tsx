import { css } from "@emotion/react";
import { Children, createContext } from "react";
import Box from "./Box";
import Column from "./Column";
import { TShirtSizes } from "./units/tshirts";
import useTheme from "./useTheme";

const alignments = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
};

const context = createContext<TShirtSizes>("md");
const Provider = context.Provider;
export const gapContext = context;

const Row = ({
  children,
  gap = "md",
  simple,
  alignY = "top",
  ...props
}: any) => {
  const { size } = useTheme();

  return (
    <Box
      d="flex"
      css={css`
        box-sizing: border-box;
        align-items: ${alignments[alignY]};
        flex-wrap: nowrap;
        margin: 0 -${size(gap).raw / 2}px;
      `}
      {...props}
    >
      <Provider value={gap}>
        {simple
          ? Children.map(children, (child) => (
              <Column width="expand">{child}</Column>
            ))
          : children}
      </Provider>
    </Box>
  );
};

export default Row;
