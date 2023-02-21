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

const Inline = ({ gap, alignY, ...props }: Props, ref: Ref<unknown>) => {
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
};

export default forwardRef(Inline);
