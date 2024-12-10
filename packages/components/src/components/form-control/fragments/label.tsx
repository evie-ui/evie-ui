import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const FormControlLabel = (props: Props) => {
  return (
    <Text {...props} mb="xs" fontWeight="bold">
      {props.children}
    </Text>
  );
};
