import { TextButton } from "../../text-button";

export const ModalButton = (props: React.ComponentProps<typeof TextButton>) => {
  return <TextButton flex={1} {...props} />;
};
