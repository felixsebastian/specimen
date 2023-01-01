import { omit, pick } from "lodash";
import { ComponentProps } from "react";
import Link from "../Link";
import Span from "./Span";
import Text from "./Text";
import useIsInline from "./useIsInline";

const textPropsToForward = ["color", "underline", "weight"] as const;
type TextPropsToForward = typeof textPropsToForward[number];

const TextLink = ({
  children,
  ...props
}: ComponentProps<typeof Link> &
  Pick<ComponentProps<typeof Text>, TextPropsToForward>) => {
  const isInline = useIsInline();
  const inline = props.inline ?? isInline;
  const TextComponent = inline ? Span : Text;

  return (
    <Link {...omit(props, textPropsToForward)} inline={inline}>
      <TextComponent
        color="link"
        underline
        {...pick(props, textPropsToForward)}
      >
        {children}
      </TextComponent>
    </Link>
  );
};

export default TextLink;
