import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardHeader = ({ children, ..._props }: Props) => {
  const props = useComponentDefaults((t) => t.Card?.Header, _props);

  return <View {...props}>{children}</View>;
};
