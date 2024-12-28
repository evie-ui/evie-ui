import type { Progress } from "@evie-ui/types";
import type { RoundedPropsType, ThemeColors } from "../../theme";
import type { ViewProps } from "../view/types";

type BaseProps = React.PropsWithChildren & {
  color?: ThemeColors;
} & Pick<ViewProps, keyof RoundedPropsType | "h">;

export type IndeterminateProps = { indeterminate: true };
export type DeterminateProps = { indeterminate?: false; progress: Progress };

export type ProgressBarRootProps = BaseProps &
  (DeterminateProps | IndeterminateProps);

export type ProgressBarIndicatorProps = { color?: ThemeColors };
