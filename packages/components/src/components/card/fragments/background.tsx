import { StyleSheet } from "react-native";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardBackground = (props: Props) => {
  return <View {...props} overflow="hidden" {...StyleSheet.absoluteFillObject} />;
};
