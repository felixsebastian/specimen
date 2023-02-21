import { css, CSSObject } from "@emotion/react";
import useTheme from "./useTheme";
import { forwardRef, Ref } from "react";
import { TShirtSizes } from "./units/tshirts";
import { isNull, omit } from "lodash";
import Box, { BoxProps } from "./Box";

const alignments = {
  stretch: "stretch",
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

interface Props extends BoxProps {
  gap?: null | TShirtSizes;
  alignX?: keyof typeof alignments;
}

const propsToOmit = ["d", "alignX", "css", "gap"];

const Stack = (props: Props, ref: Ref<unknown>) => {
  const { s } = useTheme();

  const dynamicStyles: CSSObject = {
    alignItems: alignments[props.alignX ?? "stretch"],
  };

  if (!isNull(props.gap)) dynamicStyles.rowGap = s[props.gap ?? "md"];

  return (
    <Box
      d="flex"
      css={css(
        css`
          flex-direction: column;
        `,
        dynamicStyles
      )}
      {...omit(props, propsToOmit)}
      ref={ref}
    />
  );
};

export default forwardRef(Stack);
