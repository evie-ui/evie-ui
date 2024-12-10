import { useComponentDefaults } from "../../theme";
import { TextButton } from "../text-button";

type Props = React.ComponentProps<typeof TextButton>;

export const Chip = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    h: 36,
    w: "auto",
    fontSize: 12,
    px: "md",
  });

  return <TextButton {...props} />;
};
