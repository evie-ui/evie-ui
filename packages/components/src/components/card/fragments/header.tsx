import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardHeader = ({ children, ..._props }: Props) => {
  const props = useComponentDefaults(_props, {
    gap: "xs",
  });

  return <View {...props}>{children}</View>;
};
