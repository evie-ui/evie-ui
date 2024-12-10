import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const PageSubtitle = (props: Props) => {
  return <Text {...props} color="onSurfaceVariant" fontSize="caption" />;
};
