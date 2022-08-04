import { useTheme } from "@emotion/react";
import { ReactNode } from "react";

export interface Props {
  href: string;
  newTab?: boolean;
  children: ReactNode;
  inline?: boolean;
}

export default (props: Props) => {
  const { color } = useTheme();

  return (
    <a
      href={props.href}
      target={props.newTab ? "_blank" : undefined}
      css={
        props.inline
          ? {
              display: "inline-block",
              textDecoration: "underline",
              color: color("link").hex,
            }
          : {
              display: "block",
              textDecoration: "none",
              color: "inherit",
            }
      }
    >
      {props.children}
    </a>
  );
};
