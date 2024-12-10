import { useComponentDefaults } from "../../../theme";
import { TextButton } from "../../text-button";

type Props = React.ComponentProps<typeof TextButton>;

export const CardButton = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    h: 56,
    w: "auto",
    rounded: "sm",
  });
  return <TextButton {...props} />;
};
