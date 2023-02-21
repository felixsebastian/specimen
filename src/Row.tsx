import { css } from "@emotion/react";
import { Children, createContext, forwardRef, Ref } from "react";
import Box, { BoxProps } from "./Box";
import Column from "./Column";
import { TShirtSizes } from "./units/tshirts";
import useTheme from "./useTheme";
import WithChildren from "./WithChildren";

const alignments = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
};

type Alignment = keyof typeof alignments;

const context = createContext<TShirtSizes>("md");
const Provider = context.Provider;
export const gapContext = context;

interface Props extends WithChildren, Omit<BoxProps, "d"> {
  gap?: TShirtSizes;
  simple?: boolean;
  alignY?: Alignment;
}

const Row = (
  { children, gap = "md", simple, alignY = "top", ...props }: Props,
  ref: Ref<unknown>
) => {
  const { size } = useTheme();

  return (
    <Box
      ref={ref}
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

export default forwardRef(Row);
