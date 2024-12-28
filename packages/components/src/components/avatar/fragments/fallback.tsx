import { useContext } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { AvatarContext } from "../_context";
import type { AvatarFallbackProps } from "../types";

export const AvatarFallback = (_props: AvatarFallbackProps) => {
  const props = useComponentDefaults((t) => t.Avatar?.Fallback, _props);

  const { currentState } = useContext(AvatarContext);
  if (currentState !== "fallback") return null;

  return (
    <View {...props} w="100%" h="100%">
      {props.children}
    </View>
  );
};
