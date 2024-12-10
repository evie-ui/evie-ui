import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Sample App",
  slug: "sample-app",
  scheme: "sample-app",
  version: "0.0.1",
  orientation: "portrait",
  android: {
    package: "app.example",

    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  androidStatusBar: {
    translucent: true,
    backgroundColor: "#ffffff",
    barStyle: "dark-content",
  },
  plugins: [
    "expo-router",
    "expo-build-properties",
    "react-native-edge-to-edge",
    ["expo-screen-orientation", { initialOrientation: "DEFAULT" }],
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash.png",
        imageWidth: 150,
      },
    ],
    [
      "expo-font",
      //   {
      //     fonts: [
      //       "./assets/fonts/REM-Light.ttf",
      //       "./assets/fonts/REM-Medium.ttf",
      //       "./assets/fonts/REM-Regular.ttf",
      //     ],
      //   },
    ],
  ],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
    // reactCanary: true,
  },
});
