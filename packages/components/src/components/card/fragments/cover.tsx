import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardCover = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Card?.Cover, _props);

  return <View {...props} />;
};
