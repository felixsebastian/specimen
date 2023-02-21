import { css } from "@emotion/react";
import { omit, pick } from "lodash";
import { ComponentProps, Ref, forwardRef } from "react";
import Link, { LinkProps } from "../Link";
import useOutlineCss from "../useOutlineCss";
import WithChildren from "../WithChildren";
import Span from "./Span";
import Text from "./Text";
import useIsInline from "./useIsInline";

const textPropsToForward = [
  "color",
  "underline",
  "weight",
  "italic",
  "children",
] as const;

type TextPropsToForward = typeof textPropsToForward[number];

interface AsButtonProps {
  asButton: true;
  inline?: boolean;
  handleClick?: () => void;
}

interface AsLinkProps extends LinkProps {
  asButton?: false;
}

type Props = (AsButtonProps | AsLinkProps) &
  WithChildren &
  Pick<ComponentProps<typeof Text>, TextPropsToForward>;

const TextLink = (props: Props, ref: Ref<unknown>) => {
  const isInline = useIsInline();
  const inline = props.inline ?? isInline;
  const TextComponent = inline ? Span : Text;
  const outline = useOutlineCss();

  const text = (
    <TextComponent
      color="link"
      underline
      {...pick(props, textPropsToForward)}
    />
  );

  if (props.asButton) {
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        onClick={props.handleClick}
        css={css(
          {
            display: inline ? "inline-block" : "block",
            cursor: "pointer",
          },
          outline
        )}
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      ref={ref as Ref<HTMLAnchorElement>}
      {...omit(props, textPropsToForward)}
      inline={inline}
    >
      {text}
    </Link>
  );
};

export default forwardRef(TextLink);
