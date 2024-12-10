import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CollapsibleHeaderFragment = (props: Props) => {
  return <View {...props}>{props.children}</View>;
};
