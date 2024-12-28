import { use } from "react";
import { useComponentDefaults } from "../../../theme";
import { IconButton } from "../../icon-button";
import { magicModal } from "../../magic-modal";
import { ModalContext } from "../_context";

type Props = React.ComponentProps<typeof IconButton>;

export const ModalCloseButton = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Modal?.CloseButton, _props);

  const { closeable } = use(ModalContext);
  if (!closeable) return;

  return (
    <IconButton {...props} onPress={magicModal.hide}>
      {props.children}
    </IconButton>
  );
};
