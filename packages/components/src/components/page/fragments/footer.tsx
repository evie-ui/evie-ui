import { forwardRef } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

export const PageFooter = forwardRef<React.ComponentRef<typeof View>, React.ComponentProps<typeof View>>(
  (_props, ref) => {
    const props = useComponentDefaults(_props, {
      px: "lg",
      gap: "md",
      color: "onBackground",
      bgColor: "background",
    });

    return (
      <View {...props} ref={ref}>
        {props.children}
      </View>
    );
  },
);
