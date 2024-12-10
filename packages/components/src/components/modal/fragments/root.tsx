import { useSharedValue } from "react-native-reanimated";
import { View } from "../../view";
import { ModalScrollContext } from "../_context";

type Props = React.ComponentProps<typeof View>;

export const ModalRoot = (props: Props) => {
  const scroll = useSharedValue(0);

  return (
    <ModalScrollContext.Provider value={{ scroll }}>
      <View flexGrow={1} flexShrink={1} pt="lg" pb="xl" {...props} />
    </ModalScrollContext.Provider>
  );
};
