import WithHtmlAttributes from "./WithHtmlAttributes";

const getHtmlAttributes = (props: WithHtmlAttributes) => ({
  ...props.htmlAttributes,
  className: props.className,
  "data-testid": props.testId,
});

export default getHtmlAttributes;
