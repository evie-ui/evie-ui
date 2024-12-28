import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardContent = ({ children, ..._props }: Props) => {
  const props = useComponentDefaults((t) => t.Card?.Content, _props);

  return <View {...props}>{children}</View>;
};
