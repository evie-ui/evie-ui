import { forwardRef } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardRoot = forwardRef<React.ComponentRef<typeof View>, Props>((_props, ref) => {
  const props = useComponentDefaults(_props, {
    p: "lg",
    gap: "md",
    rounded: "md",
    overflow: "hidden",
    bgColor: "surface",
  });

  return (
    <View {...props} ref={ref}>
      {props.children}
    </View>
  );
});
