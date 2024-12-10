import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardFooter = ({ children, ..._props }: Props) => {
  const props = useComponentDefaults(_props, {
    gap: "sm",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  });

  return <View {...props}>{children}</View>;
};
