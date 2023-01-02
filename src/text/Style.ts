import weights from "./weights";

type Weight = keyof typeof weights;

export interface Style {
  color?: string;
  underline?: boolean;
  bold?: boolean;
  weight?: Weight;
}
