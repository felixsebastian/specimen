import { css } from "@emotion/react";
import { forwardRef, MouseEvent, Ref, useContext } from "react";
import navigationContext from "./navigationContext";
import { useIsInline } from "./text";
import WithChildren from "./WithChildren";
import useOutlineCss from "./useOutlineCss";

interface Props extends WithChildren {
  to: string;
  newWindow?: boolean;
  inline?: boolean;
  useNativeNavigation?: boolean;
  handleClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export type LinkProps = Props;

const Link = ({ children, ...props }: Props, ref: Ref<HTMLAnchorElement>) => {
  const navigationFn = useContext(navigationContext);
  const isInline = useIsInline();
  const inline = props.inline ?? isInline;
  const outline = useOutlineCss();

  return (
    <a
      ref={ref}
      href={props.to}
      target={props.newWindow ? "_blank" : undefined}
      css={css(
        {
          display: inline ? "inline-block" : "block",
        },
        outline
      )}
      onClick={(event) => {
        if (!props.useNativeNavigation && navigationFn) {
          event.preventDefault();
          navigationFn(props.to);
        }

        props.handleClick?.(event);
      }}
    >
      {children}
    </a>
  );
};

export default forwardRef(Link);
