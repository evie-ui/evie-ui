import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const ModalTitle = (props: Props) => {
  return <Text fontSize="title" fontWeight="bold" numberOfLines={2} lineHeight={28} {...props} />;
};
