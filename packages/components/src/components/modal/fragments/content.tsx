import { forwardRef } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

export const ModalContent = forwardRef<React.ComponentRef<typeof View>, React.ComponentProps<typeof View>>(
  (_props, ref) => {
    const props = useComponentDefaults(_props, {
      flexGrow: 1,
      flexShrink: 1,
      gap: "sm",
      px: "xl",
    });

    return <View {...props} ref={ref} />;
  },
);
