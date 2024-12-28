import { useComponentDefaults } from "../../theme";
import { TextButton } from "../text-button";

type Props = React.ComponentProps<typeof TextButton>;

export const Chip = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Chip, _props);
  return <TextButton {...props} />;
};
