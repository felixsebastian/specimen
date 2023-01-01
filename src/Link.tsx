import { css } from "@emotion/react";
import useTheme from "./useTheme";
import { useContext } from "react";
import navigationContext from "./navigationContext";
import { useIsInline } from "./text";
import WithChildren from "./WithChildren";

interface Props extends WithChildren {
  to: string;
  newWindow?: boolean;
  inline?: boolean;
  useNativeNavigation?: boolean;
}

export default ({ children, ...props }: Props) => {
  const { c, s } = useTheme();
  const navigationFn = useContext(navigationContext);
  const isInline = useIsInline();
  const inline = props.inline ?? isInline;

  return (
    <a
      href={props.to}
      target={props.newWindow ? "_blank" : undefined}
      css={css({
        display: inline ? "inline-block" : "block",
        borderRadius: s.xxs,
        "&:focus-visible": {
          outline: `${s.xxs} solid ${c.outline}`,
        },
      })}
      onClick={(e) => {
        if (!props.useNativeNavigation && navigationFn) {
          e.preventDefault();
          navigationFn(props.to);
        }
      }}
    >
      {children}
    </a>
  );
};
