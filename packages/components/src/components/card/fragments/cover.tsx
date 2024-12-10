import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardCover = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    mt: "-lg",
    mx: "-lg",
  });

  return <View {...props} />;
};
