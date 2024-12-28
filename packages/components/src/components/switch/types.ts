import type { View } from "../view";

export type SwitchRootProps = React.ComponentProps<typeof View> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export type SwitchIndicatorProps = React.ComponentProps<typeof View>;
