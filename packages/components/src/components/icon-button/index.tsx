import { forwardRef } from "react";
import { useComponentDefaults } from "../../theme";
import { Icon } from "../icon";
import { Pressable } from "../pressable";

type Props = React.ComponentProps<typeof Pressable>;
type Ref = React.ComponentRef<typeof Pressable>;

export const IconButton = forwardRef<Ref, Props>(({ children, ..._props }, ref) => {
  const props = useComponentDefaults(_props, {
    size: 72,
    rounded: "md",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
    scaleDownAnimation: "hard",
  });

  return (
    <Pressable {...props} ref={ref}>
      <Icon opacity={props.loading ? 0 : 1}>{children}</Icon>
    </Pressable>
  );
});
