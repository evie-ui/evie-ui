import { useComponentDefaults } from "../../theme";
import { View } from "../view";
import type { SeparatorProps } from "./types";


export const Separator = (_props: SeparatorProps) => {
  const props = useComponentDefaults((t) => t.Separator, _props, {
    bgColor: "outline",
    orientation: "horizontal",
  });

  const style =
    props.orientation === "horizontal"
      ? { h: 1, w: "100%" }
      : { w: 1, h: "100%" };

  return <View {...style} {...props} />;
};
