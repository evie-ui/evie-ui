import { Pressable } from "../../../components/pressable";
import { OptionButtonContext } from "../context";

type Props = React.ComponentProps<typeof Pressable> & { selected?: boolean };

export const OptionButtonRoot = (props: Props) => {
  return (
    <Pressable {...props} flex={1} gap="xs">
      <OptionButtonContext.Provider value={{ isSelected: props.selected }}>
        {props.children}
      </OptionButtonContext.Provider>
    </Pressable>
  );
};
