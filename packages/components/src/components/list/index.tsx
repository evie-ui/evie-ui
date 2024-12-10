import type { NullOrUndefined } from "@evie-ui/types";
import { Fragment } from "react";

type ListProps<T> = {
  data: T[] | NullOrUndefined;
  children: (item: T) => React.JSX.Element;
  ListEmptyComponent?: () => React.JSX.Element;
  ItemSeparatorComponent?: () => React.JSX.Element;
};

const EmptyComponent = () => <Fragment />;

export const List = <T,>({ data = [], ...props }: ListProps<T>) => {
  const ListEmptyComponent =
    typeof props.ListEmptyComponent === "undefined"
      ? EmptyComponent
      : props.ListEmptyComponent;

  if (!data?.length) return <ListEmptyComponent />;

  const ItemSeparatorComponent =
    typeof props.ItemSeparatorComponent === "undefined"
      ? EmptyComponent
      : props.ItemSeparatorComponent;

  return (
    <Fragment>
      {data.map((item, index) => (
        <Fragment key={index.toString()}>
          {props.children?.(item as T)}
          {index > 0 && <ItemSeparatorComponent />}
        </Fragment>
      ))}
    </Fragment>
  );
};
