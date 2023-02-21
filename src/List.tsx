import { ComponentProps, forwardRef, ReactNode, Ref } from "react";
import Column from "./Column";
import Row from "./Row";
import Stack from "./Stack";
import { Text } from "./text";

type Type = "unordered" | "ordered";

interface Props extends ComponentProps<typeof Stack> {
  items: ReactNode[];
  type?: Type;
}

const List = (
  { items, type = "unordered", ...props }: Props,
  ref: Ref<unknown>
) => (
  <Stack ref={ref} as={type === "unordered" ? "ul" : "ol"} {...props}>
    {items.map((item, index) => (
      <Row as="li" gap="sm">
        <Column>
          <Text as="div">{type === "unordered" ? "•" : index + 1 + "."}</Text>
        </Column>
        <Column width="expand">
          <Text as="div" lineGap={1 / 2} key={index}>
            {item}
          </Text>
        </Column>
      </Row>
    ))}
  </Stack>
);

export default forwardRef(List);
