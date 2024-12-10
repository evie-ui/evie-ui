import type { NullOrUndefined } from "@evie-ui/types";
import { TextButton } from "../../components/text-button";

type RootProps<T extends string> = React.PropsWithChildren & {
  value: T | NullOrUndefined;
  onValueChange: (value: T) => void;
};

type ItemProps<T extends string> = React.ComponentProps<typeof TextButton> & { value: T };

export const createSegmentedControl = <T extends string>(value: T, onValueChange: (value: T) => void) => {
  const Root = (props: RootProps<T>) => props.children;

  const Item = (props: ItemProps<T>) => {
    const _checked = value === props.value;
    return (
      <TextButton
        {...props}
        bgColor={_checked ? "primary" : undefined}
        onPress={() => onValueChange?.(props.value)}
        flex={1}
      />
    );
  };

  return { SegmentedControl: { Root, Item } };
};
