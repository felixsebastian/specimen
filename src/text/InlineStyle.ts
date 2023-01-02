import weights from "./weights";

type Weight = keyof typeof weights;

export default interface InlineStyle {
  color?: string;
  underline?: boolean;
  bold?: boolean;
  weight?: Weight;
  italic?: boolean;
}
