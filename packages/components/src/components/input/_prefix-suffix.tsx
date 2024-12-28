import type { TODO } from "@evie-ui/types";
import { useContext } from "react";
import { FormControlContext } from "../form-control/_context";
import { ProgressCircle } from "../progress-circle";
import { View } from "../view";
import { _getDefaultProps } from "./_base";

type Props = React.PropsWithChildren & {
  suffix?: React.JSX.Element | null;
  prefix?: React.JSX.Element | null;
};

export const PrefixSuffix = ({
  children,
  prefix,
  suffix,
  ..._props
}: Props) => {
  const props = _getDefaultProps(_props as TODO);
  const { loading } = useContext(FormControlContext);

  return (
    <View flexDirection="row" alignItems="center" bgColor={props.bgColor}>
      {prefix && <View ml="sm">{prefix}</View>}

      {children}

      {(loading || suffix) && (
        <View mr="sm">
          {loading ? (
            <View
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              mr="sm"
            >
              <ProgressCircle.Root indeterminate size={32} color="background">
                <ProgressCircle.Indicator />
              </ProgressCircle.Root>
            </View>
          ) : (
            suffix
          )}
        </View>
      )}
    </View>
  );
};
