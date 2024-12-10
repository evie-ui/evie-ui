import { objectDeepMerge } from "@evie-ui/utils/object";
import { useContext } from "react";
import { useComponentDefaults } from "../../../theme";
import { Text, TextComponentContext } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const CardSubtitle = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    color: "onSurfaceVariant",
    fontSize: 14,
  });

  const textProps = useContext(TextComponentContext);
  const mergedProps = objectDeepMerge(props, textProps);

  return <Text {...mergedProps} />;
};
