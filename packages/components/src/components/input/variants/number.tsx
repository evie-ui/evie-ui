import { forwardRef } from "react";
import { TextInput } from "./text";

type Props = Omit<React.ComponentProps<typeof TextInput>, "defaultValue" | "value" | "onChangeText"> & {
  defaultValue?: string | number | null;
  value?: string | number | null;
  onChangeText?: (value: number | null) => void;
};

export const NumberInput = forwardRef<React.ComponentRef<typeof TextInput>, Props>((props, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      keyboardType="number-pad"
      defaultValue={String(props.defaultValue).replace(/\D/g, "")}
      value={props.value ? String(props.value).replace(/\D/g, "") : undefined}
      onChangeText={(value) => {
        const number = Number.parseInt(value.replace(/\D/g, ""));
        props.onChangeText?.(Number.isNaN(number) ? null : number);
      }}
    />
  );
});
