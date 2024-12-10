import type { Progress } from "@evie-ui/types";
import type { View } from "../view";

type BaseProps = Pick<
  React.ComponentProps<typeof View>,
  "bgColor" | "color"
> & { size?: number };

export type IndeterminateProps = BaseProps & { indeterminate: true };
export type DeterminateProps = BaseProps & {
  indeterminate?: false;
  progress: Progress;
};
