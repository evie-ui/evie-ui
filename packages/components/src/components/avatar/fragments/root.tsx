import { Children, isValidElement, useState } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { AvatarContext } from "../_context";
import type { AvatarCurrentState, AvatarRootProps } from "../types";
import { AvatarImage } from "./image";

export const AvatarRoot = (_props: AvatarRootProps) => {
  const props = useComponentDefaults((t) => t.Avatar?.Root, _props);

  const [currentState, setCurrentState] = useState<AvatarCurrentState>(() => {
    const hasImageChildren = Children.toArray(props.children).some((child) => {
      if (!isValidElement(child)) return false;
      return child.type === AvatarImage;
    });

    if (!hasImageChildren) return "fallback";
    return "initial";
  });

  return (
    <View
      {...props}
      aspectRatio={1}
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      textTransform="uppercase"
    >
      <AvatarContext.Provider value={{ currentState, setCurrentState }}>
        {props.children}
      </AvatarContext.Provider>
    </View>
  );
};
