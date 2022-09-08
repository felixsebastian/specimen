import { css, useTheme } from "@emotion/react";
import { ReactNode } from "react";

export interface Props {
  href: string;
  newTab?: boolean;
  children: ReactNode;
  inline?: boolean;
}

export default (props: Props) => {
  const { c, s } = useTheme();

  return (
    <a
      href={props.href}
      target={props.newTab ? "_blank" : undefined}
      css={css(
        css`
          border-radius: ${s.sm3};
          &:focus-visible {
            outline: ${s.sm3} solid ${c.outline};
          }
        `,
        props.inline
          ? {
              display: "inline-block",
              textDecoration: "underline",
              color: c.link,
            }
          : {
              display: "block",
              textDecoration: "none",
              color: "inherit",
            }
      )}
    >
      {props.children}
    </a>
  );
};
