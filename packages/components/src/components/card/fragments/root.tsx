import { forwardRef } from "react";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const CardRoot = forwardRef<React.ComponentRef<typeof View>, Props>(
  (_props, ref) => {
    const props = useComponentDefaults((t) => t.Card?.Root, _props);

    return (
      <View {...props} ref={ref}>
        {props.children}
      </View>
    );
  }
);
