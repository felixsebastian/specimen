import { css } from "@emotion/react";
import { forwardRef, Ref } from "react";
import Box, { BoxProps } from "./Box";

const Center = (props: BoxProps, ref: Ref<unknown>) => (
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
);

export default forwardRef(Center);
