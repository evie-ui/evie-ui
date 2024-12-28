import { forwardRef } from "react";
import { useComponentDefaults } from "../../../theme";
import { FlatList } from "../../flatlist";
import { View } from "../../view";

type Ref<T> = React.ForwardedRef<React.ComponentRef<typeof FlatList<T>>>;
type Props<T = unknown> = React.ComponentProps<typeof FlatList<T>>;

export const PageListComponent = <T,>(_props: Props<T>, ref?: Ref<T>) => {
  const props = useComponentDefaults((t) => t.Page?.List, _props, {
    mx: "-md",
    px: "md",
    onEndReachedThreshold: 0.1,
    showsVerticalScrollIndicator: false,
    ItemSeparatorComponent: () => <View pb="sm" />,
  });

  return (
    <FlatList<T>
      {...props}
      ref={ref}
      contentContainerStyle={[{ flex: 1 }, props.contentContainerStyle]}
    />
  );
};

export const PageList = forwardRef(PageListComponent) as <T>(
  props: Props<T> & { ref?: Ref<T> }
) => ReturnType<typeof PageListComponent>;
