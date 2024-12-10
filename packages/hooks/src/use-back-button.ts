import { useEffect } from "react";
import { BackHandler } from "react-native";

/**
 * A hook that registers a callback function to handle the hardware back button press.
 *
 * @param {() => boolean} handler - The callback function to handle the hardware back button press,
 * and return a boolean indicating whether the back button press should be handled.
 * @return {void}
 */
export const useBackButton = (handler: () => boolean): void => {
  useEffect(() => {
    const internalHandler = BackHandler.addEventListener("hardwareBackPress", handler);
    return () => internalHandler.remove();
  }, [handler]);
};
