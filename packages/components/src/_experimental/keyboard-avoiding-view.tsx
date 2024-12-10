import { KeyboardAvoidingView as RNKeyboardAvoidingView } from "react-native-keyboard-controller";
import { useTheme } from "../theme";

type Props = React.ComponentProps<typeof RNKeyboardAvoidingView>;

export const KeyboardAvoidingView = (props: Props) => {
  const { theme } = useTheme();
  return <RNKeyboardAvoidingView behavior="padding" keyboardVerticalOffset={theme.getSpacing("md")} {...props} />;
};
