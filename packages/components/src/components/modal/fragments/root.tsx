import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const ModalRoot = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Modal?.Root, _props);

  return <View {...props} />;
};
