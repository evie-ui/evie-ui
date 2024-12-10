// @ts-nocheck

import { useEffectOnce } from "@evie-ui/hooks";
import { SvgAdd } from "@evie-ui/icons/add";
import { SvgRemove } from "@evie-ui/icons/remove";
import { NumberHelpers } from "@evie-ui/utils/number";
import { useEffect, useRef, useState } from "react";
import { useComponentDefaults } from "../../theme";
import { IconButton } from "../icon-button";
import { Text } from "../text";
import { View } from "../view";

type Props = {
  color?: string;
  iconColor?: string;
  step: number;
  initialValue: number | undefined;
  onChange: (value: number) => void;
  max?: number;
  min?: number;
  unit?: {
    singular: string;
    plural: string;
  };
};

const INTERVAL_MS = 200;

export const Stepper = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    color: "surface",
    iconColor: "onSurface",
  });

  const { min, max, step, color, unit, onChange, iconColor } = props;
  const _getClampedValue = (value: number = min ?? 0) =>
    NumberHelpers.clamp(value, { min, max });

  const mountedRef = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);
  const [value, setValue] = useState(props.initialValue ?? 0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: onChange can't change
  useEffect(() => {
    if (!mountedRef.current) return;
    onChange?.(value);
  }, [value]);

  useEffectOnce(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  });

  return (
    <View
      gap="lg"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-around"
    >
      <IconButton
        bgColor={color}
        color={iconColor}
        disabled={min !== undefined ? value <= min : false}
        onPress={() => {
          setValue((oldValue) => _getClampedValue(oldValue - step));
        }}
        onPressIn={() => {
          timer.current = setInterval(() => {
            setValue((oldValue) => _getClampedValue(oldValue - step));
          }, INTERVAL_MS);
        }}
        onPressOut={() => {
          clearInterval(timer.current);
        }}
      >
        <SvgRemove />
      </IconButton>

      <View flexGrow={1} justifyContent="center" alignItems="center">
        <Text fontSize={28} fontWeight="bold">
          {value}
        </Text>

        {unit && (
          <Text fontSize="caption">
            {value === 1 ? unit.singular : unit.plural}
          </Text>
        )}
      </View>

      <IconButton
        bgColor={color}
        color={iconColor}
        disabled={max !== undefined ? value >= max : false}
        onPress={() => {
          setValue((oldValue) => _getClampedValue(oldValue + step));
        }}
        onPressIn={() => {
          timer.current = setInterval(() => {
            setValue((oldValue) => _getClampedValue(oldValue + step));
          }, INTERVAL_MS);
        }}
        onPressOut={() => {
          clearInterval(timer.current);
        }}
      >
        <SvgAdd />
      </IconButton>
    </View>
  );
};
