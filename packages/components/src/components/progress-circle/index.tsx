import { forwardRef } from "react";
import { useComponentDefaults } from "../../theme";
import type { ProgressCircleBase } from "./_base";
import type { DeterminateProps, IndeterminateProps } from "./_types";
import { Determinate } from "./fragments/determinate";
import { Indeterminate } from "./fragments/indeterminate";

type Ref = React.ComponentRef<typeof ProgressCircleBase>;

export const ProgressCircle = forwardRef<Ref, IndeterminateProps | DeterminateProps>((_props, ref) => {
  const props = useComponentDefaults(_props, {
    size: 96,
    color: "primary",
    bgColor: "surface",
  });

  return props.indeterminate ? <Indeterminate {...props} ref={ref} /> : <Determinate {...props} ref={ref} />;
});
