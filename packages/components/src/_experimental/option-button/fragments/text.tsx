import { useContext } from "react";
import { Text } from "../../../components/text";
import { OptionButtonContext } from "../context";

type Props = React.ComponentProps<typeof Text>;

export const OptionButtonText = (props: Props) => {
  const { isSelected } = useContext(OptionButtonContext);
  return (
    <Text
      w="75%"
      textAlign="center"
      fontSize="caption"
      alignSelf="center"
      textBreakStrategy="balanced"
      fontWeight={isSelected ? "bold" : "regular"}
      {...props}
    >
      {props.children}
    </Text>
  );
};
