import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardContent = ({ children, ..._props }: Props) => {
  const props = useComponentDefaults(_props, {
    gap: "lg",
    flexGrow: 1,
  });

  return <View {...props}>{children}</View>;
};
