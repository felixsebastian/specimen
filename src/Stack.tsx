import { useTheme } from "@emotion/react";
import { Children, ReactNode } from "react";
import { Sizes } from "./units/tshirts";
import useSs, { SsProps } from "./useSs";

interface Props extends SsProps {
  gap?: Sizes;
  children: ReactNode;
}

export default (props: Props) => {
  const { size } = useTheme();
  const ss = useSs(props);

  return (
    <div
      css={{
        ...ss,
        display: "flex",
        flexDirection: "column",
        rowGap: size(props.gap ?? "md").px,
      }}
    >
      {Children.map(props.children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
};
