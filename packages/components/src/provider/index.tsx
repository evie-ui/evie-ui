import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PubSubProvider } from "../_experimental/pub-sub-provider";
import { MagicModalPortal } from "../components/magic-modal/_component";
import { ThemeProvider } from "../theme";

type Props = Omit<React.ComponentProps<typeof ThemeProvider>, "theme"> & {
  initialTheme: React.ComponentProps<typeof ThemeProvider>["initialTheme"];
  components?: React.ComponentProps<typeof ThemeProvider>["components"];
};

const defaultComponents: Props["components"] = {
  Stepper: {
    Root: {
      gap: "lg",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      value: 0,
      min: 0,
      max: undefined,
      step: 1,
      onValueChange: () => {},
    },
    Value: {
      flex: 1,
      fontSize: 28,
      textAlign: "center",
    },
    Negative: {},
    Positive: {},
  },

  Modal: {
    Root: {
      flexGrow: 1,
      flexShrink: 1,
      pt: "lg",
      pb: "xl",
      bgColor: "background",
      rounded: "lg",
      overflow: "hidden",
    },
    Header: {
      h: 72,
      px: "xl",
      pb: "md",
      gap: "lg",
      alignItems: "center",
      flexDirection: "row",
    },
    Content: {
      flexGrow: 1,
      flexShrink: 1,
      gap: "sm",
      px: "xl",
    },
    BackButton: {
      size: 40,
      px: "none",
      py: "none",
      fontSize: 24,
    },
    Footer: {
      mt: "lg",
      px: "xl",
      gap: "sm",
      alignItems: "center",
      flexDirection: "row",
    },
    CloseButton: {
      size: 40,
      px: "none",
      py: "none",
      mr: "-sm",
      fontSize: 32,
    },
    List: {},
    ScrollView: {
      mx: "-xl",
      px: "lg",
      pb: "xl",
    },
    Subtitle: {
      color: "onSurfaceVariant",
      numberOfLines: 1,
    },
    Title: {
      fontSize: "title",
      fontWeight: "bold",
      numberOfLines: 2,
      lineHeight: 28,
    },
    TitleContainer: {},
  },
  Text: {
    fontSize: "body",
    color: "onBackground",
    fontFamily: "body",
    fontWeight: "regular",
    textAlignVertical: "center",
  },
  TextButton: {
    h: 72,
    w: "100%",
    px: "lg",
    gap: "sm",
    bgColor: "primary",
    fontSize: "button",
    rounded: "md",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    scaleDownAnimation: "soft",
  },
  Switch: ({ state }) => ({
    Root: {
      h: 32,
      px: "xs",
      rounded: "full",
      aspectRatio: 1.75,
      overflow: "visible",
      justifyContent: "center",
      bgColor: state === "unchecked" ? "surface" : "primary",
    },
    Indicator: {
      h: 26,
      aspectRatio: 1,
      rounded: "full",
      bgColor: state === "unchecked" ? "#888888" : "onPrimary",
    },
  }),

  Accordion: {
    Root: {},
    Item: {},
    Trigger: {
      bgColor: "surface",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    Content: {},
    Indicator: {},
  },
  Avatar: {
    Root: {
      size: 100,
      rounded: "full",
    },
    Image: {},
    Fallback: {
      bgColor: "surface",
      fontSize: "title",
      fontWeight: "bold",
    },
  },
  Card: {
    Root: {
      p: "lg",
      gap: "md",
      rounded: "md",
      overflow: "hidden",
      bgColor: "surface",
    },
    Cover: {
      mt: "-lg",
      mx: "-lg",
    },
    Header: { gap: "xs" },
    Title: { fontWeight: "bold", fontSize: "section-title" },
    Subtitle: { color: "onSurfaceVariant", fontSize: 14 },
    Content: {
      gap: "lg",
      flexGrow: 1,
    },
    Background: {},
    Footer: {
      gap: "sm",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  Chip: {
    h: 36,
    px: "md",
    w: "auto",
    fontSize: 12,
  },
  Collapsible: {
    Root: {},
    Header: {},
    Content: {},
    Indicator: {},
  },
  IconButton: {
    size: 72,
    rounded: "md",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    scaleDownAnimation: "hard",
  },
  Image: {
    contentFit: "contain",
  },
  Input: {},
  Link: { color: "primary", fontWeight: "bold" },
  Pressable: {},
  ProgressBar: {
    Root: {
      h: 8,
      rounded: "full",
      color: "surface",
    },
    Indicator: {
      color: "primary",
    },
  },
  ProgressCircle: {
    Root: {
      size: 48,
      thickness: 4,
      color: "surface",
    },
    Indicator: {
      color: "primary",
    },
  },
  Slider: {
    Root: {},
    Indicator: {},
  },
  StatusBar: {},
  ToggleGroup: {
    Root: {},
    Item: {},
  },
  Grid: {
    Row: {},
    Column: {},
  },
  FlatList: {},
  MultiStep: {},
  ScrollView: {},
  Separator: {},
  Section: {
    Root: {},
    Header: {},
    TitleContainer: {},
    Title: {},
    Subtitle: {},
    Action: {},
    Content: {},
    Footer: {},
  },
  View: {},
  Select: {
    Root: {},
    Item: {},
  },
  FormControl: {
    Root: {},
    Label: {},
    Input: {},
    Helper: {
      fontSize: "caption",
      fontWeight: "semibold",
      color: "onBackgroundVariant",
      textAlign: "right",
      mt: "xs",
      mr: "sm",
    },
    Error: {
      fontSize: "caption",
      textAlign: "right",
      fontWeight: "bold",
      color: "error",
      mt: "xs",
      mr: "sm",
    },
  },
  Page: {
    Root: {},
    Header: {},
    Content: {},
    Title: {},
    Subtitle: {},
    Footer: {},
    BackButton: {},
    List: {},
    ScrollView: {},
    TitleContainer: {},
  },
  MagicModal: {},
};

export const AppProvider = ({
  children,
  initialTheme,
  components = defaultComponents,
}: Props) => {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider initialTheme={initialTheme} components={components}>
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
