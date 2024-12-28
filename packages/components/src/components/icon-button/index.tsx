import { forwardRef } from "react";
import { useComponentDefaults } from "../../theme";
import { Pressable } from "../pressable";
import { View } from "../view";

type Props = React.ComponentProps<typeof Pressable>;
type Ref = React.ComponentRef<typeof Pressable>;

export const IconButton = forwardRef<Ref, Props>(
  ({ children, ..._props }, ref) => {
    const props = useComponentDefaults((t) => t.IconButton, _props);

    return (
      <Pressable {...props} ref={ref}>
        <View opacity={props.loading ? 0 : 1}>{children}</View>
      </Pressable>
    );
  }
);
