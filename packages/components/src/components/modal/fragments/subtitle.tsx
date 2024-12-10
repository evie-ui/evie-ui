import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const ModalSubtitle = (props: Props) => {
  return <Text color="onSurfaceVariant" numberOfLines={1} {...props} />;
};
