import type { Progress } from "@evie-ui/types";
import type { ThemeColors, ThemeSpacing } from "../../theme";

type BaseProps = React.PropsWithChildren & {
  size?: ThemeSpacing;
  color?: ThemeColors;
  thickness?: number;
};

export type IndeterminateProps = { indeterminate: true };
export type DeterminateProps = { indeterminate?: false; progress: Progress };

export type ProgressCircleRootProps = BaseProps &
  (DeterminateProps | IndeterminateProps);

export type ProgressCircleIndicatorProps = { color?: ThemeColors };
