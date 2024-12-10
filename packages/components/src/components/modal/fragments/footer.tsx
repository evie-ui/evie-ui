import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const ModalFooter = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    px: "xl",
    gap: "sm",
    alignItems: "center",
    flexDirection: "row",
    mt: "lg",
  });

  return <View {...props} />;
};
