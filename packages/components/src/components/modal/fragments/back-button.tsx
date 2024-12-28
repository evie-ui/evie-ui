import { useComponentDefaults } from "../../../theme";
import { IconButton } from "../../icon-button";

type Props = React.ComponentProps<typeof IconButton>;

export const ModalBackButton = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Modal?.BackButton, _props);

  return (
    <IconButton
      {...props}
      // onPress={props.onBackButtonPress}
    >
      {props.children}
    </IconButton>
  );
};
