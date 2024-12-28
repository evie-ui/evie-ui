import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const ModalFooter = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Modal?.Footer, _props);

  return <View {...props} />;
};
