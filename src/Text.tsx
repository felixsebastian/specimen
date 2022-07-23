import { useTheme } from "@emotion/react";
import { pick } from "lodash";
import { ReactNode } from "react";
import useSs, { SsProps } from "./useSs";
import { createStyleObject } from "@capsizecss/core";
import fontMetrics from "@capsizecss/metrics/roboto";
import { Sizes } from "./units/tshirts";

const ssProps = ["bg", "radius"] as const;

type Weight =
  | "ultra"
  | "black"
  | "bold"
  | "semibold"
  | "medium"
  | "regular"
  | "light"
  | "thin"
  | "ultrathin";

const weights = {
  ultra: 800,
  black: 800,
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  thin: 200,
  ultrathin: 100,
};

interface Props extends Pick<SsProps, typeof ssProps[number]> {
  children: ReactNode;
  color?: string;
  size?: Sizes;
  weight?: Weight;
}

export default ({ weight, ...props }: Props) => {
  const { color, fontSize } = useTheme();
  const ss = useSs(pick(props, ssProps));

  return (
    <p
      css={{
        ...ss,
        display: "block",
        margin: 0,
        fontWeight: weight && weights[weight],
        color: color(props.color),
        ...createStyleObject({
          capHeight: fontSize(props.size).px,
          lineGap: fontSize(props.size).px,
          fontMetrics,
        }),
      }}
    >
      {props.children}
    </p>
  );
};
