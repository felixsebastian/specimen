import { css } from "@emotion/react";
import { forwardRef } from "react";
import Box, { BoxProps } from "./Box";

const Center = forwardRef((props: BoxProps, ref) => (
  <Box
    d="flex"
    h="full"
    css={css`
      align-items: center;
      justify-content: center;
    `}
    {...props}
    ref={ref}
  />
));

export default Center;
