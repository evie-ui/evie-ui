import type { View } from "../view";

export type SeparatorProps = React.ComponentProps<typeof View> & {
  orientation?: "horizontal" | "vertical";
};
