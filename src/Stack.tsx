import { css, SerializedStyles } from "@emotion/react";
import useTheme from "./useTheme";
import { forwardRef } from "react";
import { TShirtSizes } from "./units/tshirts";
import useSs, { SsProps } from "./useSs";
import WithChildren from "./WithChildren";

const alignments = {
  stretch: "stretch",
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

interface Props extends SsProps, WithChildren {
  gap?: null | TShirtSizes;
  css?: SerializedStyles;
  className?: string;
  alignX?: keyof typeof alignments;
}

export default forwardRef<HTMLDivElement, Props>((props: Props, ref) => {
  const { size } = useTheme();
  const ss = useSs(props);

  return (
    <div
      css={css(
        ss,
        css`
          display: flex;
          flex-direction: column;
          align-items: ${alignments[props.alignX ?? "stretch"]};
        `,
        { rowGap: props.gap === null ? undefined : size(props.gap ?? "md").raw }
      )}
      ref={ref}
      className={props.className}
    >
      {props.children}
    </div>
  );
});
