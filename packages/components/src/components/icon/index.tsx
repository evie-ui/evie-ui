import type { TODO } from "@evie-ui/types";
import { Children, Fragment, cloneElement, isValidElement, useContext } from "react";
import { StyleSheet } from "react-native";
import { useComponentDefaults, useTheme } from "../../theme";
import type { Text } from "../text";
import { TextComponentContext } from "../text";

type Props = React.ComponentProps<typeof Text>;

export const Icon = ({ children, ..._props }: Props) => {
  const { theme } = useTheme();
  const parentTextProps = useContext(TextComponentContext);

  const props = useComponentDefaults(
    _props,
    {
      fontSize: "icon",
      alignSelf: "center",
      color: "onSurfaceVariant",
    },
    parentTextProps,
  );

  const Component = Children.only(children ?? <Fragment />);
  if (!isValidElement(Component)) return <Fragment />;

  const color = theme.getColor(props.color);
  const size = theme.getFontSize(props.fontSize);

  return cloneElement<TODO>(Component, {
    fill: color,
    color,
    size,
    style: [StyleSheet.flatten(props.style), { opacity: props.opacity }],
  });
};
