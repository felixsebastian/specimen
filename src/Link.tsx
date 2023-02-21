import { css } from "@emotion/react";
import { forwardRef, Ref, useContext } from "react";
import navigationContext from "./navigationContext";
import { useIsInline } from "./text";
import WithChildren from "./WithChildren";
import useOutlineCss from "./useOutlineCss";

interface Props extends WithChildren {
  to: string;
  newWindow?: boolean;
  inline?: boolean;
  useNativeNavigation?: boolean;
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

export default forwardRef(Link);
