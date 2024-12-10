import "react-native-gesture-handler";

import { AppProvider } from "@evie-ui/components/provider";
import { Slot } from "expo-router";
import { lightTheme } from "../src/theming/light";

export default function App() {
  return (
    <AppProvider initialTheme={lightTheme}>
      <Slot />
    </AppProvider>
  );
}
