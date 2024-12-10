import { createContext, useContext } from "react";
import { TextButton } from "../text-button";
import { View } from "../view";

type SegmentedControlContextProps = {
  value: string | undefined;
  onValueChange: (value: string) => void;
};

const SegmentedControlContext = createContext<SegmentedControlContextProps>({
  value: "",
  onValueChange: () => {},
});

type SegmentedControlRootProps = React.ComponentProps<typeof View> & SegmentedControlContextProps;
type SegmentedControlItemProps = React.PropsWithChildren & { value: string };

const SegmentedControlRoot = ({ value, onValueChange: onChange, ...props }: SegmentedControlRootProps) => {
  return (
    <SegmentedControlContext.Provider value={{ value, onValueChange: onChange }}>
      <View {...props} flexDirection="row" bgColor="surface" rounded="md" />
    </SegmentedControlContext.Provider>
  );
};

const SegmentedControlItem = (props: SegmentedControlItemProps) => {
  const { value, onValueChange } = useContext(SegmentedControlContext);

  return (
    <TextButton
      {...props}
      flex={1}
      onPress={() => onValueChange(props.value)}
      bgColor={props.value === value ? "primary" : "surface"}
      color={props.value === value ? "onPrimary" : "onSurface"}
    />
  );
};

export const SegmentedControl = {
  Root: SegmentedControlRoot,
  Item: SegmentedControlItem,
};
