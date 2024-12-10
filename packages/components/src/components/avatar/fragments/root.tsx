import { Children, isValidElement, useEffect, useState } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { AvatarContext } from "../_context";
import { AvatarImage } from "./image";

type CurrentState = React.ContextType<typeof AvatarContext>["currentState"];
type Props = React.ComponentProps<typeof View>;

export const AvatarRoot = (_props: Props) => {
  const [currentState, setCurrentState] = useState<CurrentState>("initial");
  const props = useComponentDefaults(_props, {
    size: 100,
    rounded: "full",
    fontSize: "title",
    fontWeight: "bold",
    bgColor: "surface",
  });

  useEffect(() => {
    const hasImageChildren = Children.toArray(props.children).some((child) => {
      if (!isValidElement(child)) return false;
      return child.type === AvatarImage;
    });

    if (!hasImageChildren) setCurrentState("fallback");
  }, [props.children]);

  return (
    <View
      {...props}
      aspectRatio={1}
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      textTransform="uppercase"
    >
      <AvatarContext.Provider value={{ currentState, setCurrentState }}>{props.children}</AvatarContext.Provider>
    </View>
  );
};
