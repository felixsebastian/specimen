import { css } from "@emotion/react";
import useTheme from "./useTheme";
import { forwardRef, Ref } from "react";
import Box, { BoxProps } from "./Box";
import { TShirtSizes } from "./units/tshirts";
import { SsProps } from "./useSs";

interface Props extends BoxProps, SsProps {
  gap?: TShirtSizes;
  alignY?: "top" | "bottom" | "center";
}

const alignments = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
};

export default forwardRef(
  ({ gap, alignY, ...props }: Props, ref: Ref<HTMLElement>) => {
    const { size } = useTheme();

    return (
      <Box
        ref={ref}
        d="flex"
        {...props}
        css={css({
          flexWrap: "wrap",
          gap: size(gap ?? "md").raw,
          alignItems: alignments[alignY ?? "top"],
        })}
      />
    );
  }
);
