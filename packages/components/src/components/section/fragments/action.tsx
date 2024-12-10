import { useComponentDefaults } from "../../../theme";
import { TextButton } from "../../text-button";

type Props = React.ComponentProps<typeof TextButton>;

export const SectionAction = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    h: "auto",
    w: "auto",
    px: "none",
    gap: "xs",
    color: "brand-pink-dark",
    bgColor: "transparent",
    scaleDownAnimation: "soft",
  });

  return <TextButton {...props} />;
};
