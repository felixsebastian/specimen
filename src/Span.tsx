import { useTheme } from "@emotion/react";
import { pick } from "lodash";
import { ReactNode } from "react";
import useSs, { SsProps } from "./useSs";
import { Sizes } from "./units/tshirts";

const ssProps = ["px", "pl", "pr", "mx", "ml", "mr"] as const;

const weights = {
  ultra: 800,
  black: 800,
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  thin: 200,
  ultrathin: 100,
};

type Weight = keyof typeof weights;

interface Props extends Pick<SsProps, typeof ssProps[number]> {
  children: ReactNode;
  color?: string;
  size?: Sizes;
  weight?: Weight;
}

export default ({ weight, ...props }: Props) => {
  const { color } = useTheme();
  const ss = useSs(pick(props, ssProps));

  return (
    <span
      css={{
        ...ss,
        fontWeight: weight && weights[weight],
        color: color(props.color).hex,
      }}
    >
      {props.children}
    </span>
  );
};
