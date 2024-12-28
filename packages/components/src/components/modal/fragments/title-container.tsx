import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const ModalTitleContainer = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Modal?.TitleContainer, _props);

  return <View {...props} />;
};
