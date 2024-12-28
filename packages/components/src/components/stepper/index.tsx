import { NumberHelpers } from "@evie-ui/utils/number";
import { createContext, use, useRef } from "react";
import { useComponentDefaults } from "../../theme";
import { IconButton } from "../icon-button";
import { Text } from "../text";
import { View } from "../view";
import type {
  StepperNegativeProps,
  StepperPositiveProps,
  StepperRootProps,
  StepperValueProps,
} from "./types";

const INTERVAL_MS = 200;

const StepperContext = createContext<{
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step: number;
}>({
  step: 1,
  value: 0,
  onValueChange: () => {},
});

const StepperRoot = (_props: StepperRootProps) => {
  const props = useComponentDefaults((t) => t.Stepper?.Root, _props);

  return (
    <View {...props}>
      <StepperContext
        value={{
          value: props.value ?? 0,
          onValueChange: props.onValueChange ?? (() => {}),
          max: props.max,
          min: props.min,
          step: props.step ?? 1,
        }}
      >
        {props.children}
      </StepperContext>
    </View>
  );
};

const StepperValue = (_props: StepperValueProps) => {
  const { value } = use(StepperContext);
  const props = useComponentDefaults((t) => t.Stepper?.Value, _props);

  return <Text {...props}>{value}</Text>;
};

const StepperNegative = (_props: StepperNegativeProps) => {
  const { value, onValueChange, min, max, step } = use(StepperContext);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  const props = useComponentDefaults((t) => t.Stepper?.Negative, _props);

  return (
    <IconButton
      {...props}
      disabled={min !== undefined ? value <= min : false}
      onPress={() => {
        onValueChange(NumberHelpers.clamp(value - step, { min, max }));
      }}
      onPressIn={() => {
        timer.current = setInterval(() => {
          onValueChange(NumberHelpers.clamp(value - step, { min, max }));
        }, INTERVAL_MS);
      }}
      onPressOut={() => {
        clearInterval(timer.current);
      }}
    />
  );
};

const StepperPositive = (_props: StepperPositiveProps) => {
  const { value, onValueChange, max, min, step } = use(StepperContext);
  const timer = useRef<ReturnType<typeof setInterval>>(undefined);

  const props = useComponentDefaults((t) => t.Stepper?.Negative, _props);

  return (
    <IconButton
      {...props}
      disabled={max !== undefined ? value >= max : false}
      onPress={() => {
        onValueChange(NumberHelpers.clamp(value + step, { min, max }));
      }}
      onPressIn={() => {
        timer.current = setInterval(() => {
          onValueChange(NumberHelpers.clamp(value + step, { min, max }));
        }, INTERVAL_MS);
      }}
      onPressOut={() => {
        clearInterval(timer.current);
      }}
    />
  );
};

export const Stepper = {
  Root: StepperRoot,
  Value: StepperValue,
  Negative: StepperNegative,
  Positive: StepperPositive,
};
