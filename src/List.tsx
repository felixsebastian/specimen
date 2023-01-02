import { ComponentProps, ReactNode } from "react";
import Stack from "./Stack";
import { Text } from "./text";

type Type = "unordered" | "ordered";

interface Props extends ComponentProps<typeof Stack> {
  items: ReactNode[];
  type?: Type;
}

const List = ({ items, type = "unordered", ...props }: Props) => (
  <Stack as={type === "unordered" ? "ul" : "ol"} gap="sm" {...props}>
    {items.map((item, index) => (
      <Text as="li" key={index}>
        {type === "unordered" ? "•" : index + 1 + "."} {item}
      </Text>
    ))}
  </Stack>
);

export default List;
