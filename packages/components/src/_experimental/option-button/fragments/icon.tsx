import { useContext } from "react";
import { View } from "../../../components/view";
import { useComponentDefaults } from "../../../theme";
import { OptionButtonContext } from "../context";

type Props = React.ComponentProps<typeof View>;

export const OptionButtonIcon = (_props: Props) => {
  const { isSelected } = useContext(OptionButtonContext);

  const props = useComponentDefaults(_props, {
    minH: 64,
    alignItems: "center",
    justifyContent: "center",
    rounded: "md",
    borderWidth: 1,
    borderColor: "outline",
    color: isSelected ? "onPrimary" : "onSurface",
    bgColor: isSelected ? "primary" : "surface",
  });

  return <View {...props} />;
};
