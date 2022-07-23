import { ReactNode } from "react";
import useSs, { SsProps } from "./useSs";

interface Props extends SsProps {
  children: ReactNode;
}

export default (props: Props) => {
  const ss = useSs(props);
  return <div css={ss}>{props.children}</div>;
};
