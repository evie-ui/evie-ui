import { forwardRef } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

export const ModalContent = forwardRef<
  React.ComponentRef<typeof View>,
  React.ComponentProps<typeof View>
>((_props, ref) => {
  const props = useComponentDefaults((t) => t.Modal?.Content, _props);

  return <View {...props} ref={ref} />;
});
