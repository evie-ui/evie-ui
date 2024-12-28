import type { IconButton } from "../icon-button";
import type { Text } from "../text";
import type { View } from "../view";

export type StepperRootProps = React.ComponentProps<typeof View> & {
  value?: number;
  max?: number;
  min?: number;
  step?: number;
  onValueChange?: (value: number) => void;
};


export type StepperValueProps = React.ComponentProps<typeof Text>
export type StepperNegativeProps = React.ComponentProps<typeof IconButton>
export type StepperPositiveProps = React.ComponentProps<typeof IconButton>