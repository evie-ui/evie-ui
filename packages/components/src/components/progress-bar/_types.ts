import type { Progress } from "@evie-ui/types";

export type IndeterminateProps = { indeterminate: true };
export type DeterminateProps = { indeterminate?: false; progress: Progress };
