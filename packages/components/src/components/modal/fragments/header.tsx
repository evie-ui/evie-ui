import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View> & {
  onBackButtonPress?: () => void;
};

export const ModalHeader = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Modal?.Header, _props);

  return <View {...props} />;
};
