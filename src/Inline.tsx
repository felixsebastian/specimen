import { css, SerializedStyles } from "@emotion/react";
import useTheme from "./useTheme";
import { forwardRef, ReactNode, Ref } from "react";
import Box from "./Box";
import { Sizes } from "./units/tshirts";
import { SsProps } from "./useSs";

interface Props extends SsProps {
  as?: string;
  children?: ReactNode;
  gap?: Sizes;
  alignY?: "top" | "bottom" | "center";
  css?: SerializedStyles;
  className?: string;
}

const alignments = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
};

export default forwardRef(
  ({ alignY, ...props }: Props, ref: Ref<HTMLElement>) => {
    const { size } = useTheme();

    return (
      <Box
        ref={ref}
        {...props}
        d="flex"
        css={css({
          flexWrap: "wrap",
          gap: size(props.gap ?? "md").raw,
          alignItems: alignments[alignY ?? "top"],
        })}
        className={props.className}
      />
    );
  }
);
