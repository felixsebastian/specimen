import { HTMLProps } from "react";

interface WithHtmlAttributes {
  className?: string;
  testId?: string;
  htmlAttributes?: HTMLProps<HTMLElement>;
}

export default WithHtmlAttributes;
