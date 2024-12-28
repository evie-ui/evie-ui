import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardFooter = ({ children, ..._props }: Props) => {
  const props = useComponentDefaults((t) => t.Card?.Footer, _props);

  return <View {...props}>{children}</View>;
};
