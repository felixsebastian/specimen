import { css } from "@emotion/react";
import Box, { BoxProps } from "./Box";
import WithChildren from "./types/WithChildren";

const Center = (props: BoxProps & WithChildren) => (
  <Box
    d="flex"
    h="full"
    css={css`
      align-items: center;
      justify-content: center;
    `}
    {...props}
  >
    {props.children}
  </Box>
);

export default Center;
