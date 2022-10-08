import { pick } from "lodash";
import { ReactNode } from "react";
import Link, { Props as LinkProps } from "./Link";
import Text from "./Text";

interface Props extends Pick<LinkProps, "to" | "newWindow"> {
  children: ReactNode;
}

export default (props: Props) => (
  <Text color="link" underline>
    <Link inline {...pick(props, ["to", "newWindow"])}>
      {props.children}
    </Link>
  </Text>
);
