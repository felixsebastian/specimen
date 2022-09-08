import { css, SerializedStyles, useTheme } from "@emotion/react";
import { forwardRef, ReactNode } from "react";
import { Sizes } from "./units/tshirts";
import useSs, { SsProps } from "./useSs";

const alignments = {
  stretch: "stretch",
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

interface Props extends SsProps {
  gap?: null | Sizes;
  children: ReactNode;
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
