import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const PageTitle = (props: Props) => {
  return <Text {...props} numberOfLines={1} fontFamily="title" fontSize="page-title" fontWeight="bold" />;
};
