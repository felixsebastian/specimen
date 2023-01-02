import { TShirtSizes } from "../units/tshirts";
import InlineStyle from "./InlineStyle";

interface BlockStyle extends InlineStyle {
  font?: string;
  size?: TShirtSizes;
  align?: "left" | "center" | "right";
}

export default BlockStyle;
