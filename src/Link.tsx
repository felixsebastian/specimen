import { css } from "@emotion/react";
import useTheme from "./useTheme";
import { ReactNode, useContext } from "react";
import navigationContext from "./navigationContext";

export interface Props {
  to: string;
  newWindow?: boolean;
  children: ReactNode;
  inline?: boolean;
  useNativeNavigation?: boolean;
}

export default (props: Props) => {
  const { c, s } = useTheme();
  const navigationFn = useContext(navigationContext);

  return (
    <a
      href={props.to}
      onClick={(e) => {
        if (!props.useNativeNavigation && navigationFn) {
          e.preventDefault();
          navigationFn(props.to);
        }
      }}
      target={props.newWindow ? "_blank" : undefined}
      css={css(
        css`
          border-radius: ${s.xxs};
          &:focus-visible {
            outline: ${s.xxs} solid ${c.outline};
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
