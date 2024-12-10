import {
  objectDeepMerge,
  objectExtractKeysAndDeleteFromOriginal,
} from "@evie-ui/utils/object";
import { Fragment, cloneElement, useCallback } from "react";
import {
  getFallbackColorBasedOnBgColor,
  textProps,
  useComponentDefaults,
  useTheme,
} from "../../theme";
import type { Icon } from "../icon";
import { Pressable } from "../pressable";
import { Text } from "../text";

type BaseComponentProps = React.ComponentProps<typeof Pressable> &
  React.ComponentProps<typeof Text>;
type Props = BaseComponentProps & {
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
};

export const TextButton = ({
  children,
  leftIcon,
  rightIcon,
  ..._props
}: Props) => {
  const props = useComponentDefaults(_props, {
    h: 72,
    w: "100%",
    px: "lg",
    gap: "sm",
    bgColor: "primary",
    color: getFallbackColorBasedOnBgColor(_props.bgColor),
    fontSize: "button",
    rounded: "md",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    scaleDownAnimation: "soft",
  });

  const _textProps = objectExtractKeysAndDeleteFromOriginal(
    props,
    ...textProps
  );

  const { theme } = useTheme();

  const generateIconComponent = useCallback(
    (side: "left" | "right") => {
      const icon = side === "left" ? leftIcon : rightIcon;
      if (!icon) return <Fragment />;

      const iconProps = icon.props as React.ComponentProps<typeof Icon>;
      const mergedProps = objectDeepMerge(_textProps, iconProps);
      const fontSize = theme.getFontSize(mergedProps.fontSize);

      return (
        <Fragment>
          {cloneElement<React.ComponentProps<typeof Icon>>(icon, {
            opacity: props.loading ? 0 : 1,
            fontSize: fontSize ? fontSize * 1.25 : undefined,
          })}
        </Fragment>
      );
    },
    [leftIcon, rightIcon, _textProps, props.loading, theme]
  );

  return (
    <Pressable {...props} color={_textProps.color} flexDirection="row">
      {generateIconComponent("left")}

      <Text opacity={props.loading ? 0 : 1} {..._textProps}>
        {children}
      </Text>

      {generateIconComponent("right")}
    </Pressable>
  );
};
