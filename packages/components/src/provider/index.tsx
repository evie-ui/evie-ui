import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PubSubProvider } from "../_experimental/pub-sub-provider";
import { MagicModalPortal } from "../components/magic-modal/_component";
import { ThemeProvider } from "../theme";

type Props = Omit<React.ComponentProps<typeof ThemeProvider>, "theme"> & {
  initialTheme: React.ComponentProps<typeof ThemeProvider>["initialTheme"];
};

export const AppProvider = ({ children, initialTheme }: Props) => {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider initialTheme={initialTheme}>
            <PubSubProvider>
              {children}
              <MagicModalPortal />
            </PubSubProvider>
          </ThemeProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
};
