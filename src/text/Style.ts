import weights from "./weights";

type Weight = keyof typeof weights;

export interface Style {
  color?: string;
  weight?: Weight;
  underline?: boolean;
}
