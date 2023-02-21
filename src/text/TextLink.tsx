import { css } from "@emotion/react";
import { omit, pick } from "lodash";
import { ComponentProps } from "react";
import Link from "../Link";
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

interface AsLinkProps extends ComponentProps<typeof Link> {
  asButton?: false;
}

type Props = (AsButtonProps | AsLinkProps) &
  WithChildren &
  Pick<ComponentProps<typeof Text>, TextPropsToForward>;

const TextLink = (props: Props) => {
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
    <Link {...omit(props, textPropsToForward)} inline={inline}>
      {text}
    </Link>
  );
};

export default TextLink;
