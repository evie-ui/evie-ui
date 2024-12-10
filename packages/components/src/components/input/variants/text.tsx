import { forwardRef, useContext, useState } from "react";
import { FormControlContext } from "../../form-control/_context";
import { BaseInput, _getDefaultProps } from "../_base";
import { BottomLine } from "../_bottom-line";
import { PrefixSuffix } from "../_prefix-suffix";

type BaseComponentProps = React.ComponentProps<typeof BaseInput>;
type Props = BaseComponentProps & { suffix?: React.JSX.Element | null; prefix?: React.JSX.Element | null };

export const TextInput = forwardRef<React.ComponentRef<typeof BaseInput>, Props>(
  ({ suffix, prefix, style, editable, ..._props }, ref) => {
    const { disabled, loading } = useContext(FormControlContext);
    const props = _getDefaultProps(_props);
    const [focused, setFocused] = useState(false);

    const pl = props.pl ?? (prefix ? "sm" : undefined);
    const pr = props.pr ?? (suffix ? "sm" : undefined);

    return (
      <BottomLine focused={focused}>
        <PrefixSuffix suffix={suffix} prefix={prefix}>
          <BaseInput
            {...props}
            ref={ref}
            pl={pl}
            pr={pr}
            opacity={disabled ? 0.5 : props.opacity}
            editable={!disabled}
            pointerEvents={disabled || loading ? "none" : props.pointerEvents}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
          />
        </PrefixSuffix>
      </BottomLine>
    );
  },
);
